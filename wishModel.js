const mongoose = require('mongoose')
const DB = "mongodb+srv://sajithjayaram:mylibraryapp@cluster0.2pltx.mongodb.net/wish?retryWrites=true&w=majority"
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
 console.log("Database Connection Successful")
}).catch((err) => {
 console.log(err)
})

const schema = mongoose.Schema

var wishSchema = new schema({
 urname: String,
 frname: String,
 email: String,
 gif: String,
}, {
 versionKey: false
})

var wishData = mongoose.model('wishes', wishSchema)
module.exports = wishData