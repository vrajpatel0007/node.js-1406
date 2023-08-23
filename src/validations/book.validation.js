const Joi = require("joi")


const createbook = {
    body:Joi.object().keys({
        book_name : Joi.string().required().trim(),
        book_author : Joi.string().required().trim(),
        book_price : Joi.string().required().trim()
    })
}

module.exports ={
    createbook
}