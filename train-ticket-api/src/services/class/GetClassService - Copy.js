const mongoose = require("mongoose");
const VaraModel = require("../../models/Vara/VaraModel");
const GetClassService = async (req, res, ClassModel) => {

    try{
        const ID = req.params['id'];
        const from = req.params['from'];
        const to = req.params['to'];
        const date = req.params['date'];
        const ObjectId = mongoose.Types.ObjectId;

        const data = await ClassModel.aggregate([
            {$match: {_id: new ObjectId(ID)}},
            {$lookup: {from: "bogies", localField:"bogies", foreignField: "_id", as: "Bogies"}}
        ])


        //getVara or fare
        const vara = await VaraModel.aggregate([
            {$match: {fromToCity: { $all: [from, to] }, classId: new ObjectId(ID)}},
        ]);


        //find all seats & find total seats part
        const Bogies = data[0]?.Bogies;
        let totalSeats = 0;
        let seats = [];
        let bookSeats;

        if(Bogies?.length > 0){
           for(let i=0; i< Bogies.length; i++){
               seats= [...seats, ...Bogies[i]?.seats];
               totalSeats += Bogies[i]?.totalSeats;
           }
        }


        if(seats.length > 0){
            const result2 = seats.filter(({unavailableDates})=> {
                return unavailableDates?.find((cv)=> cv.date === date);
            })
            bookSeats=result2.length;
        }
        //find all seats & find total seats part



       //Bogie Faka Seats part start
        if(Bogies?.length > 0){
            for(let i=0; i< Bogies.length; i++){
                let bogieSeats = Bogies[i]?.seats;
                let bogieBookSeats;

                if(bogieSeats.length >0){
                    let result = bogieSeats.filter(({unavailableDates})=> {
                        return unavailableDates?.find((cv)=> cv.date === date);
                    })
                    bogieBookSeats=result.length;
                }
                Bogies[i].FakaSeats= Number(Bogies[i]?.totalSeats- Number(bogieBookSeats));
            }
        }
        //Bogie Faka Seats part ended









        res.status(200).json({status: "success", data: data[0], vara:vara[0]?.price, totalSeats:Number(totalSeats-bookSeats)});

    }catch(error) {
        res.status(500).json({status: "fail", data: error.toString()});
    }
}

module.exports = GetClassService