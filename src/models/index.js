const Task = require("./Task");
const User = require("./User");

User.belongsToMany(Task, {through:'userTask'})
Task.belongsToMany(User, {through:'userTask'})