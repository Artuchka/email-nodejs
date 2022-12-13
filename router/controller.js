const nodemailer = require("nodemailer")

const sgMail = require("@sendgrid/mail")

const sendEmailGrid = async (req, res) => {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY)
	const msg = {
		to: "i405b06@voenmeh.ru", // Change to your recipient
		from: "i405b06@voenmeh.ru", // Change to your verified sender
		subject: "Sending with SendGrid is Fun",
		text: "and easy to do anywhere, even with Node.js",
		html: "<strong>and easy to do anywhere, even with Node.js</strong>",
	}
	sgMail
		.send(msg)
		.then(() => {
			console.log("Email sent")
		})
		.catch((error) => {
			console.error(error)
		})

	res.json("ok")
}

const sendEmailEthernal = async () => {
	let testAccount = await nodemailer.createTestAccount()
	const transporter = nodemailer.createTransport({
		host: "smtp.ethereal.email",
		port: 587,
		auth: {
			user: "easter68@ethereal.email",
			pass: "2zAvW6qE61e4b9PA5X",
		},
	})

	let info = await transporter.sendMail({
		from: '"Fred Foo 👻" <foo@example.com>', // sender address
		to: "bar@example.com, baz@example.com", // list of receivers
		subject: "Hello ✔", // Subject line
		text: "Hello world?", // plain text body
		html: "<b>Hello world?</b>", // html body
	})

	console.log("Message sent: %s", info.messageId)
}

module.exports = { sendEmail: sendEmailGrid, sendEmailEthernal }
