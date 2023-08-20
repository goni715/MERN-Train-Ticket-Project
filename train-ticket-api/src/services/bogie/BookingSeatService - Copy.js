const mongoose = require("mongoose");
const BookingSeatService = async (Request, BogieModel) => {

    try{
        let seatId=Request.params['seatId'];
        const ObjectId = mongoose.Types.ObjectId;

        let result = await BogieModel.updateOne(
            { "seats._id": new ObjectId(seatId) },
            {
                $push: {
                    "seats.$.unavailableDates": Request.body.date
                },
            }
        );

        return {status: "success", data: result}

    }
    catch(error){
        return {status: "fail", data: error.toString()}
    }
}


module.exports=BookingSeatService