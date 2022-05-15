import express, { Request, Response, Errback, NextFunction } from "express";
import colors from "colors";
import dotenv from "dotenv";
const dottenvc = dotenv.config();
import { errorHandler } from "./middleware/errorMiddleware";
import connectDB from "./config/db";

const port = process.env.PORT || 5000;

connectDB();

const app = express();

//to access the body of the request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/meals", require("./routes/mealRoutes"));

app.use(errorHandler);

app.listen(port, () => {
   console.log(`Server started on port ${port}`);
});
