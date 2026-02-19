import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import Movie from './models/Movie.js';

dotenv.config();

const DB_CONNECTION = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.${process.env.CLUSTER_ID}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

const seedData = async () => {
  try {
    await mongoose.connect(DB_CONNECTION);
    console.log("Connected to MongoDB");

    // Read JSON file manually
    const data = fs.readFileSync('./Sample_Movies_Records.json', 'utf-8');
    const movies = JSON.parse(data);

    // Clear existing data
    await Movie.deleteMany();
    console.log("Old movies deleted");

    // Insert JSON data
    await Movie.insertMany(movies);
    console.log("Movies inserted successfully");

    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};

seedData();
