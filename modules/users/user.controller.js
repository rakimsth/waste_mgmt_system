const Model = require('./user.model');
const { textUtils } = require('../../utils/textUtils');
class Controller {
  add(payload) {
    if (!payload) throw new Error('Must send some Payload');
    return Model.create(payload);
  }

  list() {
    const test = textUtils.sentenceSantizer(
      'Institutions#$   possessing a special   character are the monti frumentarii, public grain deposits, founded for the purpose of supplying peasant proprietors with seed corn, debts being paid in kind with interest after harvest.'
    );
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
