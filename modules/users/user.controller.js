const Model = require('./user.model');

class Controller {
  add(payload) {
    if (!payload) throw new Error('Must send some Payload');
    return Model.create(payload);
  }

  list() {
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
