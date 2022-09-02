require('dotenv').config()
const nodemailer = require("nodemailer");


// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    // secure: process.env.MAIL_PORT == 456 ? true : false, // true for 465, false for other ports
    auth: {
        user: process.env.MAIL_USERNAME, // generated ethereal user
        pass: process.env.MAIL_PASSWORD, // generated ethereal password
    },
    logger: true,
    transactionLog: true, // include SMTP traffic in the logs
    allowInternalNetworkInterfaces: false
});

module.exports = transporter;

// // send mail with defined transport object
// let info = await transporter.sendMail({
//   from: '"Fred Foo 👻" <foo@example.com>', // sender address
//   to: "bar@example.com, baz@example.com", // list of receivers
//   subject: "Hello ✔", // Subject line
//   text: "Hello world?", // plain text body
//   html: "<b>Hello world?</b>", // html body
// });