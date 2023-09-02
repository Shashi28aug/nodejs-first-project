const express = require("express") //importing express module in index.js
const mongoose = require("mongoose")
const userController = require("./src/userController")
const app = express()
app.use(express.json())

// creating connection with mongodb
mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6", {
    useNewUrlParser : true
})
.then(()=>console.log("mongo db is connected"))
.catch((error) => console.log(error))

app.get("/users", userController.getUserData)
app.post("/createUser", userController.createUser)
app.put("/updateUser", userController.updateUser)
app.delete("/deleteUser", userController.deleteUser)
app.listen(8020, function(){
    console.log("App is running on port 8020")
})
