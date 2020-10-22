const mongoose =require("mongoose");

const PlayerSchema=new mongoose.Schema({
    name:{type:String, required:[true, "Name is required"], minlength:[2, "Name must be at least 2 characters"]}, 
    position:{type:String},
    action:{type:String}
}, {timestamps:true});

module.exports=mongoose.model("Player", PlayerSchema);