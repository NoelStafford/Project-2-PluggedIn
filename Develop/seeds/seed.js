const sequelize = require('../config/connection');
const { Profile, Job } = require('../models');

const jobData = require('./jobData.json');
const profileData = require('./profileData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const jobs = await Job.bulkCreate(jobData, {
    individualHooks: true,
    returning: true,
  });
  const profiles = await Profile.bulkCreate(profileData, {
    individualHooks: true,
    returning: true,
  });

  for (const profile of profileData) {
    await Profile.create({
      ...profile,
      user_id: profiles[Math.floor(Math.random() * profiles.length)].id,

    });
  }
  for (const job of jobData) {
    await Job.create({
      ...job,

    });
  }


  process.exit(0);
};

seedDatabase();
