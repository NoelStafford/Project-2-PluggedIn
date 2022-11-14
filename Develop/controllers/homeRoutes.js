const router = require('express').Router();
const { Job, Profile } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all jobss and JOIN with profile data
    const jobData = await Job.findAll({
      include: [
        {
          model: Profile,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const jobs = jobData.map((job) => job.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      jobs, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/job/:id', async (req, res) => {
  try {
    const jobData = await Job.findByPk(req.params.id, {
      include: [
        {
          model: Profile,
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
      include: [{ model: Job }],
    });

    const profile = profileData.get({ plain: true });

    res.render('profile', {
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
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
