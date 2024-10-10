const mongoose=require('mongoose');
const connectDB=()=>{
 mongoose.connect(process.env.DATABASE).then(()=>{
    console.log('mongodb connected ');
    
    }).catch((error)=>{
        console.error(error);
    })
}
module.exports=connectDB;