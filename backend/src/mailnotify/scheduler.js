const mail = require("./mailer");
const schedule= require("node-schedule")
function schedulemail(email, res) {
  var job = schedule.scheduleJob("* * * * *",function(){
       console.log(email);
       mail(email,res);
  });
}

module.exports = schedulemail;
