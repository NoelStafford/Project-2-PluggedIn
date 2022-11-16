const router = require('express').Router();
const { Job } = require('../../models');
const withAuth = require('../../utils/auth');
const fetch = require('node-fetch');

router.post('/', async (req, res) => {
  try {
    const newJob = await Job.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newJob);
  } catch (err) {
    res.status(400).json(err);
  }
});

const apiKey = '7ca66c0b57msh5f0900adbde527ap12f1d6jsn65ee2844dd63';
const apiUrl = 'https://jsearch.p.rapidapi.com/'
let apiData = {}
const originalApiSearchQuery = 'search?query=Python%20developer%20in%20Texas%2C%20USA&num_pages=1'


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': apiKey,
		'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
	}
};
const getApiResponse = async () => {
	apiData = await fetch(apiUrl+originalApiSearchQuery, options)
	.then(response => response.json());
	return apiData;
}
const renderApiData = async () => {
     apiData = await getApiResponse();
   //  console.log(apiData);
//new code added for job instance
};

// router.get('/', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   }

//   res.render();
// );

router.post('/', async (req, res) => {
  try {
    const jobData = await Job.create({
      employer_name: apiData.data[0].employer_name,
      // job_title: apiData.data[0].job_title,
      // employer_website: apiData.data[0].employer_website,
      // job_location: apiData.data[0].job_city+" , "+apiData.data[0].job_state,
      // emp_type: apiData.data[0].job_employment_type,
      // job_description: apiData.data[0].job_description,
      // job_apply_link: apiData.data[0].job_apply_link
    });
    res.status(200).json(jobData);
  } catch (err) {
    res.status(400).json(err);
  }
});





router.delete('/:id', async (req, res) => {
  try {
    const jobData = await Job.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!jobData) {
      res.status(404).json({ message: 'No job found with this id!' });
      return;
    }

    res.status(200).json(jobData);
  } catch (err) {
    res.status(500).json(err);
  }
});


renderApiData();
module.exports = router;
