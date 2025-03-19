const express = require("express")
const router = express.Router()

router.route("/encrypt").post()
router.route("/decrypt").post()

module.exports = router