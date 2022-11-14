const Job = require('./Job');
const Profile = require('./Profile');
Job
  .hasMany(Profile, {
    foreignKey: 'job_id',
    onDelete: 'CASCADE'
  });

Profile.belongsTo(Job, {
  foreignKey: 'job_id'
});

module.exports = { Job, Profile };
