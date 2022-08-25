import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../Models/ProductModel.js";

const productRoute = express.Router()
// GET all products
productRoute.get("/", 
asyncHandler(async(req,res)=>{
        const products = await Product.find({});
        res.json(products)
    }
));
// GET Single product
productRoute.get(
    "/:id", 
asyncHandler(async(req,res)=>{
        const product = await Product.findById(req.params.id);
        if(product){
            
        res.json(product)
    }else{
        res.status(404)
        throw new Error("Product no Found")
    }
    }
));


export default productRoute;