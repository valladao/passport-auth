const express = require("express")
const app = express()
app.set("view engine", "pug")

app.get("/", (req,res) => res.render("signup"))
app.listen(3001, () => console.log("Server ready"))