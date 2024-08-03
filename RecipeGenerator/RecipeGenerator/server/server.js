const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = 3001;

// Enable CORS for all routes
app.use(cors());

// Initialize Gemini model
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// SSE Endpoint
app.get("/recipeStream", async (req, res) => {
  const { ingredients, mealType, cuisine, cookingTime, complexity } = req.query;

  console.log(req.query);

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  // Function to send messages
  const sendEvent = (text) => {
    res.write(`data: ${JSON.stringify({ action: "chunk", chunk: text })}\n\n`);
  };

  const prompt = [
    "Generate a recipe that incorporates the following details:",
    `[Ingredients: ${ingredients}]`,
    `[Meal Type: ${mealType}]`,
    `[Cuisine Preference: ${cuisine}]`,
    `[Cooking Time: ${cookingTime}]`,
    `[Complexity: ${complexity}]`,
    "Please provide a detailed recipe, including steps for preparation and cooking. Only use the ingredients provided.",
    "The recipe should highlight the fresh and vibrant flavors of the ingredients.",
    "Also give the recipe a suitable name in its local language based on cuisine preference."
  ].join(" ");

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    // Send the full text as a single chunk
    sendEvent(text);
    res.write(`data: ${JSON.stringify({ action: "close" })}\n\n`);
  } catch (error) {
    console.error("Error fetching data from Gemini API:", error);
    res.write(`data: ${JSON.stringify({ action: "error", message: "Error fetching data from Gemini API." })}\n\n`);
  }

  // Clear interval and close connection on client disconnect
  req.on("close", () => {
    res.end();
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
