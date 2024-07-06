// import packages
import express from "express";
import mongoose from "mongoose";
// import { dbConnection } from "./controllers/contact.js";
import contactRouter from "./routes/contact.js";

// create express app
const app = express();

// DB connection
await mongoose.connect(process.env.MONGO_URL)

// middleware
app.use(express.json());

// use routes
app.use(contactRouter);


// port connection
const port = process.env.PORT || 2020;
app.listen(port, () => {
  console.log(`App listening on port $(port)`);
});

// app.listen (2020,(req,res) => {
//     console.log('Listening on Port 2020');
// });

