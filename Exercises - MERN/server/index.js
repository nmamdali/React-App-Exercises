import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import StudentModel from "./Models/Student.js";
const app = express();
const connectString ="mongodb+srv://admin:admin123@studentinfosys.lixipoo.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(connectString);

app.use(express.json());
app.use(cors());
app.listen(3001, () => {
    console.log("You are connected");
});

//express POST route for adding new student app.post("/addStudent", async (req, res) => {
app.post("/addStudent", async (req, res) => {
const student = new StudentModel({
    studId: req.body.studId,
    studName: req.body.studName,
    email: req.body.email, 
    password: req.body.password,
    dept: req.body.dept,
    });

await student.save();
res.send("Record Successfully Added!");
});
