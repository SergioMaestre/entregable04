const catchError = require('../utils/catchError');
const { getAllServices, createServices, getOneServices, removeServices, updateServices } = require('../services/task.services');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    const results = await getAllServices({include: [User]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const user = req.user
    const newBody = { ...req.body, userId: user.id}
    const result = await createServices(newBody);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await getOneServices(id, {include: [User]});
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await removeServices(id);
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await updateServices(id, req.body);
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}