const router = require('express').Router();
const profileRoutes = require('./profileRoutes');
const jobRoutes = require('./jobRoutes');
const apiFetch = require('./apiFetch');
const jobListing = require('./jobListing');

router.use('/profile', profileRoutes);
router.use('/jobs', jobRoutes);
router.use('/apifetch', apiFetch);
router.use('/listing', jobListing);

module.exports = router;
