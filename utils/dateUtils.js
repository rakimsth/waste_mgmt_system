/*
- date formatter based on date and format Eg: dateFormatter(date,format)
- datechecker for 18 yrs above age
- convert date to age
- Current Epoch unix timestamp generator (should generate 1631635697 number)
*/
const moment = require('moment');

const dateUtils = {
  // date formatter based on date and format Eg: dateFormatter(date,format)

  dateFormatter(date, format) {
    return moment(date).format(format);
  },

  // convert date to age
  calculateAge(dob) {
    const ageDifMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  },

  // datechecker for 18 yrs above age
  adultDateChecker(dob) {
    const age = this.calculateAge(dob);
    return age > 18;
  },

  // Current Epoch unix timestamp generator (should generate 1631635697 number)
  unixTimestamps(date) {
    return Math.floor(date.getTime() / 1000);
  }
};

module.exports = { dateUtils };
