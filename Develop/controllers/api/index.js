const router = require('express').Router();
const profileRoutes = require('./profileRoutes');
const jobRoutes = require('./jobRoutes');
const apiFetch = require('./apiFetch');

router.use('/profile', profileRoutes);
router.use('/jobs', jobRoutes);
router.use('/apifetch', apiFetch)

module.exports = router;
