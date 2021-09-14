const moment = require('moment');

const DataUtils = {
  dateFormat(date, format) {
    return moment(date).format(format);
  }
};

module.exports = { DataUtils };
