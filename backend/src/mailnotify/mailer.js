const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "funbits0@gmail.com",
    pass: "74116915@Ni",
  },
});
const mailOptions = {
  from: "funbits0@gmail.com",
  to: "guptanitesh400@gmail.com",
  subject: " Research Internship Opputunity ",
  text: `Hi, Nitesh , we are happy to offer you an internship oppurtunity at our company!`,
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) console.log("Error is " + err);
  else console.log("Mail is sent" + info);
});
