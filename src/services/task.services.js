const Task = require("../models/Task")

const getAllServices = async () => {
    return await Task.findAll();
}

const createServices = async (task) => {
    return await Task.create(task);
}

const getOneServices = async (id) => {
    return await Task.destroy({ where: { id }});
}

const removeServices = async (id) => {
    return await Task.findByPk(id);
}

const updateServices = async () => {
    return await Task.update(
        task,
        { where: { id }, returning: true}
    )
}

module.exports = {
    getAllServices,
    createServices,
    getOneServices,
    removeServices,
    updateServices
}