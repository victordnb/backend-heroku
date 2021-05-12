const { Task } = require('../models/mongoose');

const create = async (document) => {
    return await new Task(document).save();
};

const read = async (id) => {
    return await Task.findById(id).exec();
}

const readAll = async () => {
    return await Task.find().exec();
}

const update = async (id, fields) => {
    const document = await Task.findById(id).exec();
    const newDocument = {
        ...document.toObject(),
        ...fields,
    };
    document.set(newDocument);
    await document.save();
    return document;
};

const remove = async (id) => {
    const response = await Task.findByIdAndDelete(id).exec();
    return response !== null;
}

module.exports = {
    create,
    read,
    readAll,
    update,
    remove
}

