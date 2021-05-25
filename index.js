const Express = require("express")
const Cors = require("cors")
const mongoose = require("mongoose")
const config = require("config")
const smallDataRouter = require("./Router/routerSmall")
const bigDataRouter = require("./Router/routerBig")

const app = Express()
app.use(Express.json())
app.use(Cors())

app.use('/small', smallDataRouter)
app.use('/big', bigDataRouter)

const PORT = process.env.PORT || config.get("port")
app.get('/', (req, res)=>res.status(200).send("Server ready"))

async function start(){
    try{
        await mongoose.connect(config.get("dbUrl"), {
            useCreateIndex: true,
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    }catch(error){
        console.log(error.message)
    }
}

start()