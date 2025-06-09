import Order from "../models/Order.js";
export const getOrderbyCustomer =async (req,res)=>{
    try{
        const orders= await Order.find({Customer:req.params.customerId}).populate("garage","name location").sort({createdAt:-1});
    res.status(200).json(orders);
    }catch(err){
        res.status(500).json({message:err.message});
    }
};
export const getOrderbyGarage =async(req,res)=>{
    try{
        const orders=await Order.find({garage:req.params.garageId});
        res.status(200).json({orders});
    }catch(err){
        res.status(500).json({message:err.message});
    }
};
export const createOrder = async (req,res) =>{
    try{
        const order= await new Order(req.body);
        const savedOrder = await order.save();
        res.status(200).json(order);
    }catch(err){
        res.status(500).json({message:err.message});
    }
};