const express = require("express");
const router = express.Router();

const jobApplication_controller = require("../controllers/jobApplication_controller");





router.get('/:id', jobApplication_controller.get_Applications)
<<<<<<< HEAD
router.put('/accept-reject', jobApplication_controller.update_jobApplication)
=======
router.put('/', jobApplication_controller.update_jobApplication)
>>>>>>> 8fcfa5a01c02b26b4e2e44134faade0059426f1f

router.get('/public/assets/h', (req, res) => {
    res.render('file');
})
router.post('/', jobApplication_controller.create_jobApplication)
router.get('', jobApplication_controller.get_all_job_applications)

<<<<<<< HEAD
=======
// router.post('')
>>>>>>> 8fcfa5a01c02b26b4e2e44134faade0059426f1f

module.exports = router;
 