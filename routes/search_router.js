const express = require("express");
const router = express.Router();
const search_controller = require("../controllers/search_controller");


router.get('/title', search_controller.searchJobByTitle)
router.get('/location', search_controller.searchJobByLocation)
router.get('/salary', search_controller.searchJobBySalary)

module.exports = router;
 