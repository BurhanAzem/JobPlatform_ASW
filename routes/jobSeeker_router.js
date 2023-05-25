const express = require("express");
const router = express.Router();
const jobSeeker_controller = require("../controllers/jobSeeker_controller");
const requireAuthentication = require("./auth");



router.post('/login', jobSeeker_controller.login)
router.post('/', requireAuthentication, jobSeeker_controller.register_jobSeeker)
router.get('/:id', requireAuthentication, jobSeeker_controller.get_jobSeeker_byId)
<<<<<<< HEAD
router.get('/:id/bestmatch', requireAuthentication, jobSeeker_controller.get_bestMatches)
router.put('/:id', requireAuthentication, jobSeeker_controller.update_jobSeeker)
router.delete('/:id', requireAuthentication, jobSeeker_controller.delete_jobSeeker_byId)
router.get('/', requireAuthentication, jobSeeker_controller.get_all_jobSeeker)
=======
router.put('/:id', requireAuthentication, jobSeeker_controller.update_jobSeeker)
router.delete('/:id', requireAuthentication, jobSeeker_controller.delete_jobSeeker_byId)
router.get('/', requireAuthentication, jobSeeker_controller.get_all_jobSeeker)
router.get('/bestmatch/:id', requireAuthentication, jobSeeker_controller.get_bestMatches)
>>>>>>> 8fcfa5a01c02b26b4e2e44134faade0059426f1f

module.exports = router;
 