const mongoose = require("mongoose");
const VaraModel = require("../../models/Vara/VaraModel");
const ClassModel = require("../../models/Class/ClassModel");
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


        let result = await ClassModel.aggregate([
            {
                $match: {
                    _id: new ObjectId(ID),
                }
            },
            {$lookup: {from: "bogies", localField: "bogies", foreignField: "_id", as: "Bogies"}},
            {$project: {bogies:1, Bogies:1}}
        ])

        const Bogies = result[0]?.Bogies;
        let totalSeats =0;
        let seats = [];
        let bookSeats;

        if(Bogies?.length > 0){
           for(let i=0; i< Bogies.length; i++){
               seats= [...seats, ...Bogies[i]?.seats];
               totalSeats += Bogies[i]?.seats.length;
           }
        }


        if(seats.length > 0){
            const result2 = seats.filter(({unavailableDates})=> {
                return unavailableDates?.find((cv)=> cv.date === "2023-08-30");
            })
            bookSeats=result2.length;
        }



        res.status(200).json({status: "success", data: data[0], vara:vara[0]?.price, totalSeats:Number(totalSeats-bookSeats)});

    }catch(error) {
        res.status(500).json({status: "fail", data: error.toString()});
    }
}

module.exports = GetClassService