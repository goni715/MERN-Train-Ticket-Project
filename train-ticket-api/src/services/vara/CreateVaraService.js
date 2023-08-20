const mongoose = require("mongoose");

const CreateVaraService = async (req, res, VaraModel) => {

    try{
        const trainId = req.body['trainId'];
        const classId = req.body['classId'];
        const ObjectId = mongoose.Types.ObjectId;
        const from = req.body['from'];
        const to = req.body['to'];
        const price = req.body['price'];
        const PostBody = {
            trainId,
            classId,
            fromToCity: [from, to],
            price
        };

        const varaCount = await VaraModel.aggregate([
            {$match: {
                 classId: new ObjectId(classId),
                 fromToCity:{ $all: [from, to]}
               }
            }
        ]);


        if(varaCount.length > 0){
            res.status(409).json({status:"fail", data:`${from} to ${to} vara already created`});
        }else{
            let data = await VaraModel.create(PostBody)
            res.status(200).json({status: "success", data: data});
        }
    }
    catch(error) {
        res.status(500).json({status:"fail", data:error.toString()});
    }
}


module.exports = CreateVaraService;