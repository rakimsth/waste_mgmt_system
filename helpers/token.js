const JWT = require('jsonwebtoken');
const Secure = require('./secure');
const { ERR } = require('./error');

const jwtDuration = process.env.JWT_DURATION;
const appSecret = process.env.APP_SECRET;

const checkSecret = () => {
  if (!appSecret) throw ERR.APP_SECRET;
  if (appSecret.length !== 32) throw ERR.APP_SECRET32;
};

module.exports = {
  generate: data => {
    checkSecret();
    return JWT.sign(
      {
        data: Secure.encrypt(JSON.stringify(data), appSecret)
      },
      appSecret,
      {
        expiresIn: jwtDuration
      }
    );
  },

  validate: async token => {
    checkSecret();
    return new Promise(resolve => {
      JWT.verify(token, appSecret, (err, tokenData) => {
        if (err) throw ERR.TOKEN_INVALID;
        let data = tokenData.data || false;
        if (data) {
          data = JSON.parse(Secure.decrypt(data, appSecret));
        }
        resolve({ data, tokenData });
      });
    });
  }
};
