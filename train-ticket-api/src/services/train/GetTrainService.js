const mongoose = require("mongoose");
const GetTrainService = async (req, res, TrainModel) => {

   try{
       const ID = req.params['id'];
       const ObjectId = mongoose.Types.ObjectId;

       const data = await TrainModel.aggregate([
           {$match: {_id: new ObjectId(ID)}},
           {$lookup: {from: "classes", localField:"classes", foreignField: "_id", as: "Classes"}}
       ])

       res.status(200).json({status: "success", data: data});
   }
   catch(error){
       res.status(500).json({status: "fail", data: error.toString()});
   }
}


module.exports=GetTrainService;