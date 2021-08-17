const express = require("express")
const app = express()
const User = require("./user.js")

app.set("view engine", "pug")
app.use(express.urlencoded({ extended: true }))
//User.sync({ alter: true })

app.get("/", (req,res) => res.render("signup"))

app.post("/register", async(req,res) => {
  const { email, password } = req.body

  const user = await User.create({ email, password })
})

app.listen(3001, () => console.log("Server ready"))