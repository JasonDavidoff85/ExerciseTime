var express = require('express');
var router = express.Router();
const exerciseController = require('../controllers/exercise.controller');

router.get('/getexercises', exerciseController.getAllExercises);
router.post('/addexercise', exerciseController.addExercise);
router.post('/edit/:num', exerciseController.editExercise);
router.delete('/delete/:num', exerciseController.deleteExercise);

module.exports = router;