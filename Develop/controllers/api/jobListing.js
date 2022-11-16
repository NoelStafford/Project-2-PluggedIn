const router = require('express').Router();
const Job = require('../../models/Job');
const Jobs = require('../../models/Job');

// this displays 1 specific job by ID everytime
router.get('/:id', async (req, res) => {
    try {
      const JobsData = await Jobs.findByPk(req.params.id);
      if (!JobsData) {
        res.status(404).json({ message: 'No job with this id!' });
        return;
      }
      res.status(200).json(JobsData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


// THIS DEFINITELY DISPLAYS ALL OF THEM!!!! POG CHAMP
router.get('/', (req, res) => {
    const JobData = Job.findAll({
  
    })
  
  
        .then(JobData => {
            res.json(JobData)
        })
  
        .catch(err => {
            console.log(err)
            res.status(500).json(err);
        });
  
  });
module.exports = router;