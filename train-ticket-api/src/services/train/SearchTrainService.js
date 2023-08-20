const mongoose = require("mongoose");


const SearchTrainService = async (req, res, TrainModel) => {

    try{
        const from = req.params['from'];
        const to = req.params['to'];

        const data = await TrainModel.aggregate([
            {$match: {fromToCity: { $all: [from, to] }}},
            {$lookup: {from: "classes", localField:"classes", foreignField: "_id", as: "Classes"}}
        ]);

        res.status(200).json({status:"success", data:data});
    }
    catch(error) {
        res.status(500).json({status: "fail", data: error.toString()});
    }
}

module.exports=SearchTrainService