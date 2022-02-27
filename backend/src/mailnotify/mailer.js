const nodemailer = require("nodemailer");

 function mail(email,text1){
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "funbits0@gmail.com",
    pass: "74116915@Ni",
  },
});
const mailOptions = {
  from: "funbits0@gmail.com",
  to: email,
  subject: " Research Internship Opputunity ",
  text:text1,
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) console.log("Error is " + err);
   else console.log("Mail is sent" + info);
});
};
module.exports= mail ;
