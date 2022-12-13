const express = require("express")
const { sendEmail } = require("./controller")

const router = express.Router()

router.route("/").get(sendEmail)

module.exports = { router }
