const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const apiFetch = require('./apiFetch');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/apifetch', apiFetch)

module.exports = router;
