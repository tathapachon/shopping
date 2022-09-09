import express from "express";

import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js"
import ImportData from "./DataImport.js";
import cors from "cors"
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRouter from "./Routes/UserRoutes.js"
dotenv.config();
connectDatabase();

const app= express()
app.use(express.json())
app.use(cors())

// Api
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);

// Error Handler
app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`Todo good, server running port ${PORT}`))