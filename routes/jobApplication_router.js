const express = require("express");
const router = express.Router();
const jobApplicationController = require("../controllers/jobApplication_controller");



//router.post("/api/admin/get_all_trainee/:filename",traineeController.get_all_trainee);//get trainee data

router.get('/:id', jobApplicationController.get_Applications)
router.put('/', jobApplicationController.update_jobApplication)
module.exports = router;
 