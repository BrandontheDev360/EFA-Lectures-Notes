require("dotenv").config()
const Express = require("express")
const app = Express()
const dbConnection = require("./db")
const controllers = require("./controllers")
const middlewares = require("./middleware")


/*
    MVC Model View Controller
    - Software design pattern using interfaces that divide the program between:
        - database schema (model)
        - client (view)
        - logic handling (controller)
    - Allows developers to seprate the concerns of an application.
*/
app.use(middlewares.CORS)
app.use(Express.json())
app.use("/pies", middlewares.validateSession, controllers.piecontroller)
app.use("/user", controllers.usercontroller)

dbConnection.authenticate()
.then(() => {
    let test = dbConnection.sync()
})
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`[server] listening on port ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log(`[server] crashed`)
    console.log(err)
})