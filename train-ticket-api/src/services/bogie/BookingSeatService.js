const mongoose = require("mongoose");
const BookingSeatService = async (req,res, BogieModel, ClassModel) => {

    try{
        const seatId=req.params['seatId'];
        const classId = req.params['classId'];
        const ObjectId = mongoose.Types.ObjectId;


        //processing
        //find all seats & find total seats part Started for trainId
        /*
        let data = await ClassModel.aggregate([
            {
                $match: {
                    _id: new ObjectId(classId),
                }
            },
            {$lookup: {from: "bogies", localField: "bogies", foreignField: "_id", as: "Bogies"}},
            {$project: {bogies:1, Bogies:1}}
        ])

        const Bogies = data[0]?.Bogies;
        let seats = [];
        let myBookingSeats;

        if(Bogies?.length > 0){
            for(let i=0; i< Bogies.length; i++){
                seats= [...seats, ...Bogies[i]?.seats];
            }
        }


        if(seats.length > 0){
            const result2 = seats.filter(({unavailableDates})=> {
                return unavailableDates?.find((cv)=> cv.date === req.body.date && cv.name === req.body.name);
            })
            myBookingSeats=result2.length;
        }

        console.log(myBookingSeats)
        */

        //find all seats & find total seats part Ended


        //Booking Seat Part
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