const express = require("express");
const userRoute = require("./user.route");
const categoryroute = require("./category.route")
const bookroute = require("./book.route")

const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryroute)
router.use("/book", bookroute)

module.exports = router;