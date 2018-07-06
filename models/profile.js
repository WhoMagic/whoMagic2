const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  eventName: { type: String, required: true },
  eventLocation: { type: String, required: true },
  guestNumber: { type: Number, max: 10000},
  eventDescript: { type: String, required: true },
  date: { type: String, required: true},
  dress: { type: String, required: true}
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
