const mongoose=require('mongoose')

const { Schema } = mongoose

const contactSchema = new Schema({
    names:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    phone:{
        Phone:Number
    }
})

module.exports=Contact=mongoose.model("contact",contactSchema)