const mongoose = require("mongoose");
const DetailsByIDService= async (req, res,DataModel) => {
    
    try{
        let ID=req.params.id;
        const ObjectId = mongoose.Types.ObjectId;
        const DetailsQueryObject = {_id: new ObjectId(ID)};
        let data = await DataModel.aggregate([{$match: DetailsQueryObject}])
        res.status(200).json({status: "success", data: data});
    }
    catch (error) {
        res.status(500).json({status: "fail", data: error.toString()});
    }
}
module.exports=DetailsByIDService