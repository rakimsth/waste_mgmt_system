/* eslint-disable no-param-reassign */
const { ObjectId } = require('mongoose').Types;
const { DataUtils } = require('../../helpers/data');
const Model = require('./schedule.model');

class Controller {
  add(payload) {
    if (payload.allDay === 'true') {
      const { startTime, endTime, ...rest } = payload;
      payload = rest;
    }
    if (payload.isRecurring === 'false') {
      const { frequency, ...rest } = payload;
      payload = rest;
    }
    if (!payload) throw new Error('Must send some Payload');
    return Model.create(payload);
  }

  list({ limit, start, name, province, district, municipality, assignedTo }) {
    const query = [];
    if (name) {
      query.push({
        $match: {
          name: new RegExp(name, 'gi')
        }
      });
    }
    if (province) {
      query.push({
        $match: {
          province: new RegExp(province, 'gi')
        }
      });
    }
    if (district) {
      query.push({
        $match: {
          district: new RegExp(district, 'gi')
        }
      });
    }
    if (municipality) {
      query.push({
        $match: {
          municipality: new RegExp(municipality, 'gi')
        }
      });
    }
    if (assignedTo)
      query.push({
        $in: ObjectId(`${assignedTo}`)
      });
    return DataUtils.paging({
      start,
      limit,
      sort: { created_at: 1 },
      query,
      model: Model
    });
  }

  getById(id) {
    return Model.findById(id);
  }

  update(id, payload) {
    return Model.findByIdAndUpdate(id, payload);
  }

  updateLocation(id, location) {
    return Model.findByIdAndUpdate(
      { _id: id },
      { $set: { location, updatedAt: new Date() } },
      { new: true }
    );
  }

  delete(id) {
    return Model.findByIdAndRemove(id);
  }
}
module.exports = new Controller();
