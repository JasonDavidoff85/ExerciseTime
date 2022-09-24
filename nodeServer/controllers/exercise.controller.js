const exerciseService = require('../services/exercise.service')

module.exports = {
    addExercise,
    getAllExercises,
    editExercise,
    deleteExercise,
};

function addExercise(req, res, next) {
    console.log("got to psa")
    exerciseService.addExercise(req.body)
    .then(() => res.json({}))
    .catch((err) => next(err));
}

function getAllExercises(req, res, next) {
    exerciseService.getAllExercises()
    .then((psas) => res.json(psas))
    .catch((err) => next(err));
}

function editExercise(req, res, next) {
    console.log("is it here?")
    exerciseService.editExercise(req.params.num)
    .then(() => res.json({}))
    .catch((err) => next(err));
}

function deleteExercise(req, res, next) {
    console.log("is it here?")
    exerciseService.deleteExercise(req.params.num)
    .then(() => res.json({}))
    .catch((err) => next(err));
}

