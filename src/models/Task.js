const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Task = sequelize.define('task', {
    class: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Task;