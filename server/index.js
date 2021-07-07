import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// express middleware to connect and add a prefix 'posts' to the '/' route
app.use("/posts", postRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello to the memories API");
// });

app.use("/user", userRoutes);

// The mongo atlas cluster db url
// const CONNECTION_URL = "";
const PORT = process.env.PORT || 5000;

// Connecting our mongoose database
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
