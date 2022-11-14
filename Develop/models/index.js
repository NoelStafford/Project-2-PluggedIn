const Job = require('./Job');
const Profile = require('./Profile');

Profile
.hasMany(Job, {
  foreignKey: 'profile_id',
  onDelete: 'CASCADE'
});

Job.belongsTo(Profile, {
  foreignKey: 'profile_id'
});

module.exports = { Profile, Job };
