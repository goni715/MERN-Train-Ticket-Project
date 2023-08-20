const mongoose = require("mongoose");
const VaraModel = require("../../models/Vara/VaraModel");
const GetClassService = async (req, res, ClassModel) => {

    try{
        const ID = req.params['id'];
        const from = req.params['from'];
        const to = req.params['to'];
        const ObjectId = mongoose.Types.ObjectId;

        const data = await ClassModel.aggregate([
            {$match: {_id: new ObjectId(ID)}},
            {$lookup: {from: "bogies", localField:"bogies", foreignField: "_id", as: "Bogies"}}
        ])


        const vara = await VaraModel.aggregate([
            {$match: {fromToCity: { $all: [from, to] }, classId: new ObjectId(ID)}},
        ]);

        res.status(200).json({status: "success", data: data[0], vara:vara[0]?.price});

    }catch(error) {
        res.status(500).json({status: "fail", data: error.toString()});
    }
}

module.exports = GetClassService