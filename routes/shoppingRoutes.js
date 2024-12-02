const express = require("express");
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
router.post("/create", async (req, res) => {
  const { userId, productId, count } = req.body;
  if (!userId || !productId || !count) {
    return res.status(404).json({ error: "All fields required" });
  }
  const newProduct = await prisma.shipping.create({
    data: { userId, productId, count },
  });
    return res.status(201).json(newProduct);
  
});
router.put("/cancel",async (req,res)=>{
    const {shippingId} = req.body;
    // const {SHIPPING_SECRET_KEY} = req.headers["SHIPPING_SECRET_KEY"]
    if (!shippingId){
        return res.status(404).json({ "error": "Missing shippingId" });
    }
    const status = await prisma.shipping.update({
        where:{id:shippingId},
        data:{status:"cancelled"}
    })
    return res.status(200).json(status);
    
})
router.get("/get?userId=?",async (req,res)=>{
    const {userId} =req.query
    console.log("aaa")
    const shipment  = await prisma.shipping.findMany({where:{userId:userId}})
    return res.status(200).json(shipment);
})
router.get("/get", async (req,res)=>{
    const {userId} =req.query
    console.log(userId)
    if(userId){
        const shipment  = await prisma.shipping.findMany({where:{userId:parseInt(userId)}})
        return res.status(200).json(shipment);
    }
    const shipping = await prisma.shipping.findMany()
    return res.status(200).json(shipping);
})

module.exports=router;
