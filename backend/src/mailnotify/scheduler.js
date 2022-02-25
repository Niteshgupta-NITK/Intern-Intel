
const cron = require('node-cron');
var task = cron.schedule('* * * * *', () => {
    console.log('Printing this line every minute in the terminal');
});
