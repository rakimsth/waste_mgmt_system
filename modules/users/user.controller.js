const Model = require('./user.model');
const { dateUtils } = require('../../utils/dateUtils');
class Controller {
  add(payload) {
    if (!payload) throw new Error('Must send some Payload');
    return Model.create(payload);
  }

  list() {
    const test = dateUtils.adultDateChecker(new Date(2000, 10, 5));
    console.log(test);
    return Model.find().sort({ created_at: -1 });
  }

  update(id, payload) {
    if (!payload) throw new Error('Must send some Payload');
    return Model.findByIdAndUpdate(id, payload);
  }

  delete(id) {
    return Model.findByIdAndRemove(id);
  }
}
module.exports = new Controller();
