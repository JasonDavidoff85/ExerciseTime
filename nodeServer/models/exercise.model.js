const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true },
    sets: { type: Number },
    reps: { type: Number },
    min: { type: Number },
    max: { type: Number },
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Exercise', schema);