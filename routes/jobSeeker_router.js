const express = require("express");
const router = express.Router();
const jobSeeker_controller = require("../controllers/jobSeeker_controller");



router.post('/login', jobSeeker_controller.login)
router.post('/', jobSeeker_controller.register_jobSeeker)
router.get('/:id', jobSeeker_controller.get_jobSeeker_byId)
router.delete('/:id', jobSeeker_controller.delete_jobSeeker_byId)
router.get('/', jobSeeker_controller.get_all_jobSeeker)

module.exports = router;
 