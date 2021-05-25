const {model, Schema} = require("mongoose")

const schema = new Schema({
    id: Number,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: {
        streetAddress: String,
        city: String,
        state: String,
        zip: String
    },
    description: String
})

module.exports = model("BigData", schema)