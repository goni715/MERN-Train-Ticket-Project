const mongoose = require("mongoose");

const GetVaraByTrainIDService = async (req, res, VaraModel) => {
    try{

        const trainId = req.params['trainId'];
        const ObjectId = mongoose.Types.ObjectId;

        const data = await VaraModel.aggregate([
            {$match: {trainId: new ObjectId(trainId)}},
        ])
        res.status(200).json({status: "success", data: data});

    }catch(error) {
        res.status(500).json({status:"fail", data:error.toString()});
    }
}

module.exports=GetVaraByTrainIDService