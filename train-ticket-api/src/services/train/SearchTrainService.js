const mongoose = require("mongoose");
const VaraModel = require("../../models/Vara/VaraModel");
const ClassModel = require('../../models/Class/ClassModel')


const SearchTrainService = async (req, res, TrainModel) => {

    try{
        const from = req.params['from'];
        const to = req.params['to'];
        const ObjectId = mongoose.Types.ObjectId;


        const trains = await TrainModel.aggregate([
            {$match: {fromToCity: { $all: [from, to] }}},
            {$lookup: {from: "classes", localField:"classes", foreignField: "_id", as: "Classes"}}
        ]);

        let classes = []

        if(trains?.length > 0){
           await trains.forEach((element)=>{
                classes = [...classes, ...element?.Classes]
            })
        }


        let varaArray = [];


        if(classes?.length > 0){
            for(let i=0; i < classes.length; i++){
                let result = await VaraModel.aggregate([
                    {$match: {
                            classId: new ObjectId(classes[i]._id),
                            fromToCity:{ $all: [from, to]}
                        }
                    }
                ])
                if(result.length > 0){
                    varaArray.push(result[0])
                }
            }
        }



        if (classes.length > 0) {
            await classes.forEach((item, i) => {
                let result = varaArray.find((cv) => cv.classId.toString() === classes[i]?._id.toString());
                if (result?.classId.toString() === classes[i]?._id.toString()) {
                    item.vara = result?.price;
               }
            })
        }



        //let Bogies = [];
        if (classes.length > 0) {
            for(let i=0; i <classes.length; i++) {
                let bogies = await ClassModel.aggregate([
                    {
                        $match: {
                            _id: new ObjectId(classes[i]._id),
                        }
                    },
                    {$lookup: {from: "bogies", localField: "bogies", foreignField: "_id", as: "Bogies"}}
                ])

                console.log(bogies)
            }
        }

    /*
       let seats = [];
        let Bogies = [];

        if(bogies?.length > 0){
          for(let i=0; i< bogies.length; i++){
              Bogies = [...Bogies, ...bogies[i]?.Bogies]
              //console.log(bogies[i]?.Bogies)
          }

        }

        console.log(Bogies);
        if(Bogies.length >0 ){
            for(let i=0; i < Bogies.length; i++){
                Bogies[i].totalSeats = Bogies[i].seats.length;
            }
        }

        console.log(seats)

     */




        /*
        if(classes?.length > 0){
            for(let i=0; i < classes.length; i++){
                let result = await VaraModel.aggregate([
                    {$match: {
                            classId: new ObjectId(classes[i]._id),
                            fromToCity:{ $all: [from, to]}
                        }
                    }
                ])
                if(result.length > 0){
                    varaArray.push(result[0])
                }
            }
        }

         */



        res.status(200).json({status:"success", data:trains});
    }
    catch(error) {
        res.status(500).json({status: "fail", data: error.toString()});
    }
}

module.exports=SearchTrainService