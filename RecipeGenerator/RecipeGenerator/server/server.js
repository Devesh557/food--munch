

import express, { json } from 'express';
import cors from 'cors';
import fetch from 'node-fetch';


const app = express();
const PORT = 3001;

const API_KEY = 'AIzaSyAcvaMwbKIMSI4yx3bl4HP0TQaWuum5fjQ'; // Replace with your actual API key
const MODEL_NAME = 'gemini-1.5-flash';
const GOOGLE_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;

app.use(cors());
app.use(json());


app.get('/recipeStream', async (req, res) => {
  const { ingredients, mealType, cuisine, cookingTime, complexity } = req.query;

  console.log(req.query);

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const sendEvent = (data) => {
    if (data && data.text) {
      res.write(`data: ${JSON.stringify({ action: 'chunk', chunk: data.text })}\n\n`);
    } else {
      res.write(`data: ${JSON.stringify({ action: 'close' })}\n\n`);
    }
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
  ].join(' ');

  try {
    const response = await fetch(GOOGLE_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: {
          text: prompt
        },
        temperature: 0.7,
        maxOutputTokens: 500
      }),
    });

    const result = await response.json();
    console.log('API Response:', result);  // This will print the API return data


    // if (result && result.candidates && result.candidates.length > 0) {
    //   sendEvent(result.candidates[0]);
    // } else {
    //   sendEvent(null);
    // }
  } catch (error) {
    console.error('Error fetching data from Google Generative AI:', error);
    res.status(500).json({ error: 'Error fetching data from Google Generative AI' });
  }

  req.on('close', () => {
    res.end();
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});