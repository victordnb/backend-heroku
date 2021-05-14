require('dotenv').config();
const Ajv = require('ajv');
const ajv = new Ajv();
const mongoose = require('mongoose');


mongoose.connect(`mongodb+srv://Nucliostudent:tc13ybK3goJTQMpm@mongotraining.lk4fc.mongodb.net/tasker?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});

const Task = mongoose.model('Task', {
    title: String,
    completed: { type: Boolean, default: false },
    board: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Board',
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Board = mongoose.model('Board', {
    title: String,
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const taskCreateSchema = {
    type: "object",
    properties: {
      title: {type: "string"},
      board: {type: "string"},
    },
    required: ["title", "board"],
    additionalProperties: false
};


const taskUpdateSchema = {
    type: "object",
    properties: {
      title: { type: "string" },
      completed: { type: "boolean" },
      board: { type: "string" },
    },
    required: ["title", "completed"],
    additionalProperties: false
};


const taskPatchSchema = {
    type: "object",
    properties: {
      title: {type: "string"},
      completed: {type: "boolean"},
    },
    required: [],
    additionalProperties: false
};

const boardSchema = {
    type: "object",
    properties: {
      title: {type: "string"}
    },
    required: ["title"],
    additionalProperties: false
};


validateTask = (document, method) => {
    switch (method) {
        case 'POST':
            return ajv.validate(taskCreateSchema, document);
        case 'PUT':
            return ajv.validate(taskUpdateSchema, document);;
        case 'PATCH':
            return ajv.validate(taskPatchSchema, document);;
    }
}

validateBoard = (document) => {
    return ajv.validate(boardSchema, document);
}

module.exports = {
    Task,
    Board,
    validateTask,
    validateBoard,
}