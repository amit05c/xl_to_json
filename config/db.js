const mongoose= require("mongoose")
const connection= mongoose.connect(`mongodb+srv://amit:amit@cluster0.zjdswty.mongodb.net/?retryWrites=true&w=majority`)

module.exports={
    connection
}