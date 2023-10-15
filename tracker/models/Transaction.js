const mongoose=require('mongoose');

const TransactionSchema=new mongoose.Schema({
    text:{
        type:String,
        trim:true,
        required:[true,'Please write something']
    },
    amount:{
        type:Number,
        required:[true,'amount can not be empty']
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model('Transaction',TransactionSchema);