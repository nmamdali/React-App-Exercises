const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:csse3101@studentinfosys.lixipoo.mongodb.net/studentDb?retryWrites=true&w=majority');

// Create a mongoose schema for your data
const studentSchema = new mongoose.Schema({
    id: Number,
    name: String,
    age: Number,
    grade: String,
});

// Create a mongoose model
const Students = mongoose.model('Students', studentSchema);

// Route to fetch and display students
app.get('/students', async (req, res) => {
  try {
    // Fetch all students from the database
    const students = await Students.find();

    // Display the students
    res.json(students);
     // console.log(data);
   
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
