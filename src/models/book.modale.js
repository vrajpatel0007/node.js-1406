const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
        book_name: {
            type: String,
            trim: true,
        },
        book_author: {
            type: String,
            trim: true,
        },
        book_price: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestanmps: true,
        versionkey: false,
    }

)



const book = mongoose.model("book", bookSchema)
module.exports = book