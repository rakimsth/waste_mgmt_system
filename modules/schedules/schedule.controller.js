const Model = require('./schedule.model');

class Controller {
  add(payload) {
    if (!payload) throw new Error('Must send some Payload');
    return Model.create(payload);
  }

  list() {
    return Model.find().sort({ created_at: -1 });
  }
}
module.exports = new Controller();
