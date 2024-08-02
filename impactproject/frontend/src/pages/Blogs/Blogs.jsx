import React from 'react';
import './Blogs.css';
import { assets } from '../../assets/assets';

const Blogs = () => {
  return (
    <div className='blogs'>
      <div className="blogs-top">
        <h1>Welcome to Food Chef: Where Culinary Innovation Meets Tradition</h1>
        <br />
        <h2>Discover the Future of Dining</h2>
        <br />
        <p>At Food Chef, we believe that dining should be an experience that tantalizes all your senses. Our restaurant is not just a place to eat; it’s a culinary journey that combines the best of traditional flavors with the latest in food technology.</p>
      </div>
      <div className="blogs-middle">
        <div className="section">
          <div className="text">
            <h2>A Vast Variety of Food Items</h2>
            <p>From local delicacies to international cuisines, Food Chef offers a vast variety of food items that cater to every palate. Our menu is a celebration of diversity, featuring dishes from around the world, prepared with the freshest ingredients. Whether you’re a fan of spicy Indian curries, savory Italian pastas, or exotic Asian stir-fries, you’ll find something to love here.</p>
          </div>
          <img src='https://tse2.mm.bing.net/th?id=OIP.99oPfz_A4PdgUfDPJpeELwEyDM&pid=Api&P=0&h=180' alt="" />
        </div>
        <div className="section">
          <img src="https://tse1.mm.bing.net/th?id=OIP.rN-PORZmyN_h-NLGueSiyAHaEo&pid=Api&P=0&h=180" alt="" />
          <div className="text">
            <h2>AI-Powered Recipe Generator</h2>
            <p>Imagine having a personal chef who knows exactly what you crave. Our AI Recipe Generator does just that! By analyzing the ingredients you have and the type of meal you want, it crafts personalized recipes that are sure to delight your taste buds. Whether you’re in the mood for something familiar or adventurous, our AI ensures every meal is a masterpiece.</p>
          </div>
        </div>
        <div className="section">
          <div className="text">
            <h2>Built-In Culinary Library</h2>
            <p>For those who love to explore the art of cooking, our Built-In Culinary Library is a treasure trove of knowledge. It includes a wide range of cookbooks, culinary magazines, and digital resources that you can browse while enjoying your meal. But that’s not all! Our library also contains all types of books, from fiction and non-fiction to self-help and biographies. Whether you’re a culinary enthusiast or a book lover, you’ll find something to pique your interest.</p>
          </div>
          <img src="https://tse3.mm.bing.net/th?id=OIP.CmXYQ24hTkbvnVEd4Jbv4AHaFj&pid=Api&P=0&h=180" alt="" />
        </div>
      </div>
      <div className="blogs-bottom">
        <h2>Why Choose Food Chef?</h2>
        <p> <strong>Innovative Dining Experience:</strong> Our AI-powered features and diverse menu ensure a unique and personalized dining experience.</p>
        <p> <strong>AI Recipe Generator:</strong>  Enjoy meals tailored to your preferences and available ingredients, making every dining experience special.</p>
        <p> <strong>Built-In Culinary Library: </strong>Explore a wide range of books and resources, enhancing your culinary knowledge and overall dining experience.</p>
        <p><strong>Quality Ingredients:</strong> We use only the freshest and highest quality ingredients to prepare our dishes.</p>
        <p><strong>Culinary Expertise:</strong> Our chefs are passionate about food and dedicated to creating memorable meals.</p>
        <p><strong>Comfortable Ambiance:</strong> Enjoy your meal in a cozy and welcoming environment designed for relaxation and enjoyment.</p>
        <h2>Join Us at Food Chef</h2>
        <p>We invite you to join us at Food Chef and embark on a culinary adventure like no other. Whether you’re dining in or taking out, we promise an experience that will leave you coming back for more. Visit us today and taste the future of food!</p>
      </div>
    </div>
  );
}

export default Blogs;
