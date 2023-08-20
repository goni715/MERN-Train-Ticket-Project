const mongoose = require('mongoose')


const VaraSchema = mongoose.Schema(
    {
        trainId: {
            type: mongoose.Schema.Types.ObjectId,
            required:true
        },
        classId: {
            type: mongoose.Schema.Types.ObjectId,
            required:true
        },
        fromToCity: [],
        price: {
            type: Number,
            required:true
        }
    },
    { timestamps: true, versionKey:false},
);

const VaraModel = mongoose.model("vara", VaraSchema);
module.exports=VaraModel
