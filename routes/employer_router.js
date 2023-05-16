const express = require("express");
const router = express.Router();
const employer_controller = require("../controllers/employer_controller");


//router.post("/api/admin/get_all_trainee/:filename",traineeController.get_all_trainee);//get trainee data
router.post('/login', employer_controller.login)
router.post('/', employer_controller.register_employer)
router.put('/:id', employer_controller.update_employer)
router.get('/:id', employer_controller.get_employer_byId)
router.delete('/:id', employer_controller.delete_employer_byId)
router.get('/', employer_controller.get_all_employer)

module.exports = router;
 