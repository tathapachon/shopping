import express from "express";
import products from "./data/products";




const app= express()
// products
app.get("/api/products/",(req,res)=>{
    res.json(products)
}) 
// products details


app.get("/api/products/:id", (req ,res)=>{

  console.log("HOli",req.params.id)
    const product = products.find((p)=> p._id == req.params.id)
    res.json(product)
 })



app.get("/",(req,res)=>{
    res.send("API is running ...")
})
 const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`Todo good, server running port ${PORT}`))