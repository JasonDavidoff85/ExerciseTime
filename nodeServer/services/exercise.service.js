const db = require('../_helpers/database');
const exercise = db.Exercise;

module.exports = {
    addExercise,
    getAllExercises,
    editExercise,
    deleteExercise
}

async function addExercise(addExercise) {
    console.log(addPSA)
    const exist = await exercise.findOne({number: addExercise.number})
    if (exist) {
        await exist.updateOne({isActive: true});
        return
    }
    const newMsg = new exercise(addExercise);
    await newMsg.save();
}

async function getAllExercises() {
   return await psa.find();
}

async function editExercise(num) {
    const newNum = parseInt(num);
    const foundPSA = await exercise.findOne({number: newNum})
    if (!foundPSA) {
        throw 'cannot find psa to mark'
    }
    return await foundPSA.updateOne({isActive: false});
}

async function deleteExercise(num) {
    const newNum = parseInt(num);
    const foundPSA = await exercise.findOne({number: newNum})
    if (!foundPSA) {
        throw 'cannot find psa to mark'
    }
    return await foundPSA.updateOne({isActive: false});
}