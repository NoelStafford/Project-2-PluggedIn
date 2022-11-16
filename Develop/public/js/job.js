const fetch = require('node-fetch');
const router = require('express').Router();
const { Job } = require('../../models');
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


const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#job-title').value.trim();
  const salary = document.querySelector('#job-salary').value.trim();
  const description = document.querySelector('#job-desc').value.trim();

 


  if (title && salary && description) {
    const response = await fetch(`/api/jobs`, {
      method: 'POST',
      body: JSON.stringify({ title, salary, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/job');
    } else {
      alert('Failed to delete job');
    }
  }
};

// gets api info
const getApiResponse = async () => {
  apiData = await fetch(apiUrl+originalApiSearchQuery, options) // here you update apiData
  .then(response => response.json());
  return apiData;
}
const renderApiData = async () => {
   apiData = await getApiResponse(); // but then you overwrite it here, too

   router.post('/', async (req, res) => {
    try {
      const jobData = await Job.create({
        employer_name: apiData.data[0].employer_name,
        job_title: apiData.data[0].job_title,
        employer_website: apiData.data[0].employer_website,
        job_location: apiData.data[0].job_city+" , "+apiData.data[0].job_state,
        emp_type: apiData.data[0].job_employment_type,
        job_description: apiData.data[0].job_description,
        job_apply_link: apiData.data[0].job_apply_link
      });
      res.status(200).json(jobData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
};


renderApiData();


  module.exports = router;

