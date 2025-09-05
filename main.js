import mongoose from "mongoose";
import express from "express";
await mongoose.connect("mongodb://localhost:27017/todo")
import { todo } from "./models/todo.js"

// const express = require('express')
const app = express()
const port = 3000
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

app.get('/',async (req, res) => {
  let siteName="To-Do-List"
  const tasks = await todo.find()
  res.render("index",{siteName,tasks})

})

app.post("/submit", async (req, res) => {
  console.log("BODY:", req.body);
console.log("TASK:", req.body.task);


  
    let task = req.body.task;
    const TODO = new todo({ task: `${task}`, isDone: false });

    await TODO.save();
    console.log("Task saved:", task);

    
    // let siteName="To-Do-List"
    res.redirect("/"); 
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
