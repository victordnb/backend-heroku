require('dotenv').config();
const mongoose = require('mongoose');


mongoose.connect(`mongodb+srv://Nucliostudent:tc13ybK3goJTQMpm@mongotraining.lk4fc.mongodb.net/tasker?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});

const Task = mongoose.model('Task', {
    title: String,
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = {
    Task,
}