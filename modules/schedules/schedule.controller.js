const Model = require('./schedule.model');

class Controller {
  add(payload) {
    if (!payload) throw new Error('Must send some Payload');
    return Model.create(payload);
  }

  list({ limit, start, name, province, district, municipality, assignedTo }) {
    const filter = [];
    if (name) {
      filter.push({
        $match: {
          name: new RegExp(name, 'gi')
        }
      });
    }
    if (province) {
      filter.push({
        $match: {
          province: new RegExp(province, 'gi')
        }
      });
    }
    if (district) {
      filter.push({
        $match: {
          district: new RegExp(district, 'gi')
        }
      });
    }
    if (municipality) {
      filter.push({
        $match: {
          municipality: new RegExp(municipality, 'gi')
        }
      });
    }
    return Model.aggregate(filter).sort({ created_at: -1 });
  }

  update(id, payload) {
    return Model.findByIdAndUpdate(id, payload);
  }

  delete(id) {
    return Model.findByIdAndRemove(id);
  }
}
module.exports = new Controller();
