const book  = require("../models/book.modale");

/**
 * create book
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const create_book = async (reqBody) => {
    return book.create(reqBody);
};
module.exports = {
    create_book
};