const Transaction =require('../models/Transaction')
//get req
exports.getTransactions=async(req,res,next)=>{
    try {
        const transactions=await Transaction.find();
        return res.status(200).json({
            success:true,
            count:transactions.length,
            data:transactions
        });
    } catch (err) {
        return res.status(500).json({
            success:false,
            error:'server errror'
        });
    }
}

//post request
exports.addTransactions=async(req,res,next)=>{
    try {
    const{ text,amount}=req.body;
    const transaction=await Transaction.create(req.body);
    return res.status(201).json({
        success:true,
        data:transaction
    });
    } catch (err) {
        if(err.name=='ValidationError'){
            const message=Object.values(err.errors).map(val=>val.message);
            return res.status(400).json({
                success:false,
                error:message
            });
        }
        else{
            return res.status(500).json({
                success:false,
                error:'server errror'
            });
        }
    }
}

//Del requer
exports.deleteTransaction=async(req,res,next)=>{
    const id = req.params.id;
    const transaction = await Transaction.findById(req.params.id);
    try {
        if(!transaction){
            return res.status(404).json({
                success:false,
                error:"No transaction Found"
            });
        }
        const result = await Transaction.findByIdAndDelete(id);
        return res.status(200).json({
            success:true,
            data:{}
        });
    }
    catch (error) {
        return res.status(500).json({
        success:false,
        error:'server errror'
        });
    }
}