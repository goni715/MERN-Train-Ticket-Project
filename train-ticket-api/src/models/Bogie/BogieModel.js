const mongoose = require('mongoose')


const BogieSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required:true,
            unique:true,
        },
        seats: [
            {
                number: String,
                unavailableDates: [
                    {date:String, name:String}
                ]
            }
        ],
    },
    { timestamps: true, versionKey:false},
);

const BogieModel = mongoose.model("Bogie", BogieSchema);
module.exports=BogieModel
