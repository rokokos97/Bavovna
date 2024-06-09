const nodemailer = require("nodemailer");
const transporter =  nodemailer.createTransport(
	{
		host: process.env.BAVOVNA_SPACE_HOST,
		port: process.env.BAVOVNA_SPACE_PORT,
		auth: {
			user: process.env.BAVOVNA_SPACE_LOGIN,
			pass: process.env.BAVOVNA_SPACE_PASSWORD,
		},
	}
);

module.exports = transporter;
