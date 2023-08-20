const mongoose = require("mongoose");
const BookingSeatService = async (req,res, BogieModel) => {

    try{
        const seatId=req.params['seatId'];
        const ObjectId = mongoose.Types.ObjectId;

        const result = await BogieModel.updateOne(
            { "seats._id": new ObjectId(seatId) },
            {
                "$push":
                    {"seats.$.unavailableDates":
                            {
                                "date": req.body.date,
                                "name": req.body.name
                            }
                    }
            }
        );

        res.status(200).json({status: "success", data: result});

    }
    catch(error){
        res.status(500).json({status: "fail", data: error.toString()});
    }
}


module.exports=BookingSeatService