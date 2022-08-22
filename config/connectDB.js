// require mongoose
const mongoose=require('mongoose')


const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.URI)
        console.log('DATABASE CONNECT SUCCESSFULLY')
    } catch (error) {
        console.log('fail to connect')
    }
}

module.exports=connectDB