const express = require("express")
require("dotenv").config()
const { router } = require("./router/mailRouter")
const app = express()

const port = 5500

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/email", router)
app.get("/", (req, res) => {
	res.send(`
		<a href="/api/email">click</a>
	`)
})

app.listen(port, () => {
	console.log("listening on port = ", port)
})
