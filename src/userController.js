const userModel = require("./userModel")

module.exports.createUser = async function(req, res) {
    console.log("inside createUser")
    let data = req.body
    let saveData = await userModel.create(data)
    res.send(data)
}

module.exports.getUserData = async function(req, res) {
    console.log("inside getUserData")
    let data = req.query
    let dbData = await userModel.findOne({username: data.username})
    res.send(dbData)
}

module.exports.updateUser = async function(req, res) {
    console.log("inside updateUser")
    let data = req.body
    let dbData = await userModel.updateOne({username: data.username, email: data.email, bio: data.bio})
    res.send(dbData)
}

module.exports.deleteUser = async function(req, res) {
    console.log("inside deleteUser")
    let data = req.query
    let dbData = await userModel.deleteOne({username: data.username})
    res.send(dbData)
}