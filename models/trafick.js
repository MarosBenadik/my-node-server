const mongoose = require("mongoose");

const TraficSchema = new mongoose.Schema({
    ip: {
        type: String,
        required: true,
    },
    country_code: {
        type: String,
    },
    country_name: {
        type: String,
    },
    
    latitude:{
        type : String,
    },
    longitude:{
        type: String,
    }
},
{
    timestamps: true
}
);

const Trafic = mongoose.model("Trafic", TraficSchema);

module.exports = Trafic;