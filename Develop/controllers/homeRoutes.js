const router = require('express').Router();
const { Job, Profile } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {

    res.render('homepage');
});

router.get('/job/:id', async (req, res) => {
  try {
    const jobData = await Job.findByPk(req.params.id, {
      include: [
        {
          model: Job,
          attributes: ['name'],
        },
      ],
    });

    const job = jobData.get({ plain: true });

    res.render('job', {
      ...job,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in profile based on the session ID
    const profileData = await Profile.findByPk(req.session.profile_id, {
      attributes: { exclude: ['password'] },
      // include: [{ model: Job }],
    });

    const profile = profileData.get({ plain: true });

    res.render('createprofile', {
      ...profile,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the profile is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/addjob');
    return;
  }

  res.render('login');
});

router.get('/addjob', async (req, res) => {

  res.render('addjob');
});


// THIS DEFINITELY DISPLAYS ALL OF THEM!!!! POG CHAMP
router.get('/jobs', async (req, res) => {
  const JobData = await Job.findAll()

const jobs = JobData.map((job) => job.get({ plain: true }));

res.render('jobs', { 
  jobs, 
  logged_in: req.session.logged_in 
});
});



module.exports = router;


