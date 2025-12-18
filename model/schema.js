const mongoose = require("mongoose")
const schema = mongoose.Schema({
    bookname : {
        type : String,
        required : true
    },

    authorofbook : {
        type : String,
        required : true
    },

    priceofbook :{
        type : Number,
        required : true
    }
})

let fschema = mongoose.model("book",schema)

module.exports = fschema