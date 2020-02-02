var schedule = require('node-schedule');
var waktu = schedule.scheduleJob('42 * * * *', function(){
console.log('waktu berjalan');
});
