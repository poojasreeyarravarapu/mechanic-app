import mongoose from "mongoose";
const Orderschema = mongoose.Schema({
    Customer:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    serviceType:{type:String,enum:['breakdown','normal'],required:true},
    services:[String],
    garage:{type:mongoose.Schema.Types.ObjectId,ref:"Garage",required:false},
    breakdownDetails:{
        location:{
            lat:Number,
            lng:Number,
            address:String,
        },
        Status:{
            type:String,enum:["pending","accepted","completed","in-progress"],default:"pending",
        },
        assignedmechanic:{ type:mongoose.Schema.Types.ObjectId,ref:"Mechanic"},
    },
    bill:{
        total:Number,
        breakdown:[{
            Service:String,
            Cost:Number,
        }],
        paid:{type:Boolean,default:false},
    },
    createdAt:{type:Date,default:Date.now},
    scheduledAt:Date,
});

export default mongoose.model('Order', Orderschema);    

