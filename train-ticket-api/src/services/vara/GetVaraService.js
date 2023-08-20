const mongoose = require("mongoose");
const GetVaraService = async (req, res, VaraModel) => {

    try{

        const ID = req.params['id']
        const ObjectId = mongoose.Types.ObjectId;

        const data = await ClassModel.aggregate([
            {$match: {_id: new ObjectId(ID)}},
            {$lookup: {from: "bogies", localField:"bogies", foreignField: "_id", as: "Bogies"}}
        ])
        res.status(200).json({status: "success", data: data});

    }catch(error) {

    }
}

module.exports = GetVaraService