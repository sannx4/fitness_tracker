// backend/seedFoods.js

const mongoose = require('mongoose');
require('dotenv').config();
const Food = require('./models/food'); // adjust if your model path differs

const MONGO_URI = process.env.MONGO_URI;

const foods = [
  { name: 'Chapati', servingSize: '1 piece (30g)', calories: 80, protein: 3, carbs: 15, fat: 1 },
  { name: 'Rice', servingSize: '100g cooked', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
  { name: 'Dal', servingSize: '100g cooked', calories: 120, protein: 9, carbs: 20, fat: 1 },
  { name: 'Paneer', servingSize: '50g', calories: 130, protein: 7, carbs: 1, fat: 10 },
  { name: 'Idli', servingSize: '1 piece', calories: 40, protein: 2, carbs: 8, fat: 0.2 },
  { name: 'Dosa', servingSize: '1 piece', calories: 120, protein: 3, carbs: 22, fat: 3 },
  { name: 'Banana', servingSize: '1 medium', calories: 105, protein: 1.3, carbs: 27, fat: 0.3 },
  { name: 'Egg', servingSize: '1 large', calories: 70, protein: 6, carbs: 0.6, fat: 5 },
  { name: 'Milk', servingSize: '200ml', calories: 130, protein: 6.8, carbs: 9.6, fat: 6.6 },
  { name: 'Chicken Breast', servingSize: '250g cooked', calories: 410, protein: 75, carbs: 0, fat: 9 },
  { name: 'Greek Yogurt', servingSize: '200g', calories: 120, protein: 20, carbs: 8, fat: 0 },
  { name: 'Tofu', servingSize: '100g', calories: 76, protein: 8, carbs: 2, fat: 4 },
  { name: 'Almonds', servingSize: '30g (20 pieces)', calories: 173, protein: 6, carbs: 6, fat: 15 },
  { name: 'Peanut Butter', servingSize: '2 tbsp (32g)', calories: 190, protein: 8, carbs: 6, fat: 16 },
  { name: 'Whey Protein Shake', servingSize: '1 scoop (30g)', calories: 120, protein: 24, carbs: 3, fat: 1 },
  { name: 'Fish (Rohu)', servingSize: '100g cooked', calories: 140, protein: 20, carbs: 0, fat: 6 },
  { name: 'Sprouts', servingSize: '50g', calories: 50, protein: 4, carbs: 8, fat: 0.5 },
  { name: 'Moong Dal', servingSize: '100g cooked', calories: 105, protein: 9, carbs: 19, fat: 0.8 },
  { name: 'Cottage Cheese (Paneer)', servingSize: '100g', calories: 265, protein: 18, carbs: 1.2, fat: 20 },
  { name: 'Soya Chunks', servingSize: '50g cooked', calories: 160, protein: 26, carbs: 9, fat: 0.5 }
];

async function seedFoods() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected for seeding.');

    await Food.deleteMany({});
    console.log('Existing food entries cleared.');

    await Food.insertMany(foods);
    console.log('Foods seeded successfully!');

    mongoose.disconnect();
    console.log('MongoDB disconnected.');
    process.exit();
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
}

seedFoods();
