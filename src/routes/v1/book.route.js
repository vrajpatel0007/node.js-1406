const express = require("express");
const bookvalidation = require("../../validations/book.validation")
const bookcontroller = require("../../controllers/book.controller")
// const validate = require("../../middlewares/validate")
const router = express.Router();


/**Post create-category*/
router.post(
  "/create-book",
  // validate(categoryvalidation.createcategory),
  bookcontroller.createbook
)
module.exports = router;