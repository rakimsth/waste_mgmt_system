/*
- commaSeparator 10000 => 10,000
- phone number validator
*/

const numberUtils = {
  // comma seperator in number
  commaSeperator(number) {
    return number.toLocaleString('en-US');
  },

  // phone number validator
  phoneNumberValidator(phone) {
    const regExp = /^1?\s?(\(\d{3}\)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/gm;
    const phoneCheck = regExp.test(phone) ? true : false;
    return phoneCheck;
  }
};

module.exports = { numberUtils };
