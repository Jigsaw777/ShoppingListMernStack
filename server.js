const express = require("express")
const mongoose = require("mongoose")
const itemsApi = require("./routes/api/itemsApi")
const app = express()
app.use(express.json())

//DB config
const db = require('./config/keys').mongoUri

//connect to mongo
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected")).catch(err => console.log(err))

//use Routes
app.use("/api/items", itemsApi)

const port = process.env.PORT || 5000

app.listen(port, () => console.log("Server started on port : " + port))