const Model = require('./user.model');
const { properCase } = require('../../utils/textUtils');
const { encryptPassword, decryptPassword, generateJWT } = require('./user.auth');

class Controller {
  async add(payload) {
    if (!payload) throw new Error('Must send some Payload');
    const newPayload = await this.userDetailsCleaner(payload);
    const user = await Model.create(newPayload);
    return this.getById(user.id);
  }

  list() {
    return Model.find().sort({ created_at: -1 });
  }

  getById(id) {
    return Model.findOne({ _id: id });
  }

  update(id, payload) {
    if (!payload) throw new Error('Must send some Payload');
    return Model.findByIdAndUpdate(id, payload);
  }

  toggleActiveStatus(id, status) {
    return Model.updateOne({ id }, { is_active: status });
  }

  toggleApprovedStatus(id, status) {
    return Model.updateOne({ id }, { is_approved: status });
  }

  async changePassword(id, passwords) {
    const userInfo = await Model.findOne({ id }).select('password');
    if (!userInfo) throw new Error(`User Doesn't Exists`);
    const { oldPassword, newPassword } = passwords;
    const passCheck = await decryptPassword(oldPassword, userInfo.password);
    if (!passCheck) throw new Error('Password Mismatch');
    const newPasswordHash = await encryptPassword(newPassword);
    return Model.updateOne({ id }, { $set: { password: newPasswordHash } });
  }

  async resetPassword(id, payload) {
    const userInfo = await Model.findOne({ id }).select('password');
    if (!userInfo) throw new Error(`User Doesn't Exists`);
    const newPasswordHash = await encryptPassword(payload.password);
    return Model.updateOne({ id }, { $set: { password: newPasswordHash } });
  }

  async updateRoles(id, roles) {
    return Model.updateOne({ id }, { $set: { roles } });
  }

  delete(id) {
    return Model.findByIdAndRemove(id);
  }

  async userDetailsCleaner(payload) {
    let { name, password } = payload;
    const { ...rest } = payload;
    name = properCase(name);
    password = await encryptPassword(password);
    const newPayload = { ...rest, name, password };
    return newPayload;
  }

  async login(payload) {
    const query = {};
    const { username, password } = payload;
    const loginMethod = username.includes('@') ? 'email' : 'phone';
    if (loginMethod === 'email') query.email = username;
    else query.phone = username;
    const user = await Model.findOne(query).select('+password');
    if (!user) throw new Error('User not found');
    const passCheck = await decryptPassword(password, user.password);
    if (!passCheck) throw new Error('Username or Password Mismatch');
    const jwtData = { name: user.name, roles: user.roles, user: user._id.toString() };
    return { token: generateJWT(jwtData) };
  }
}
module.exports = new Controller();
