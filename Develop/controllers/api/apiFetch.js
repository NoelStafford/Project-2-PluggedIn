const router = require('express').Router();
const e = require('express');
const fetch = require('node-fetch');


//this is the API key
const apiKey = '7ca66c0b57msh5f0900adbde527ap12f1d6jsn65ee2844dd63';

// this is a const containing the API url just before the search query
const apiUrl = 'https://jsearch.p.rapidapi.com/'


// this is the intended process for grabbing serach query and feeding to the API
//const searchQuery = search;//getElementById searchbar or something similar

//this is the code that will reflect what the user searches
//var properSearch = `search?query=${searchQuery}&num_pages=1`;


//this is used so that we have a constant to test our API searches with. 
const originalApiSearchQuery = 'search?query=Python%20developer%20in%20Texas%2C%20USA&num_pages=1'
// options belonging to the API, default.
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': apiKey,
		'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
	}
};
const getApiResponse = async () => {
	const apiData = await fetch(apiUrl+originalApiSearchQuery, options)
	.then(response => response.json());
	return apiData;
}
const renderApiData = async () => {
    const apiData = await getApiResponse();
  
   var empName = apiData.data[0].employer_name
   var empWebsite = apiData.data[0].employer_website
   var jobLink = apiData.data[0].job_apply_link
   var jobState = apiData.data[0].job_state
   var jobCity = apiData.data[0].job_city
   var jobDesc = apiData.data[0].job_description
   var empType = apiData.data[0].job_employment_type
   var jobTitle = apiData.data[0].job_title
   const apiArray = [empName, empWebsite, jobLink, jobState, jobCity, jobDesc, empType, jobTitle]
   console.log(apiArray);
   
 for (i = 0; i < apiArray.length; i++) {
  //  console.log(apiArray[i]);
  }
};


renderApiData();

module.exports = router;

