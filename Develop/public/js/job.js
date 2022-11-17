const newFormHandler = async (event) => {
  event.preventDefault();

  const job_title = document.querySelector('#job-title').value.trim();
  const salary = document.querySelector('#job-salary').value.trim();
  const job_description = document.querySelector('#job-desc').value.trim();

  if (job_title && salary && job_description) {
    const response = await fetch(`/api/listing`, {
      method: 'POST',
      body: JSON.stringify({ job_title, salary, job_description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(job_title, salary,job_description)
    if (response.ok) {
      document.location.replace('/jobs');
    } else {
      alert('Failed to create job');
    }
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

document
  .querySelector('.new-job-form')
  .addEventListener('click', newFormHandler);

// document
//   .querySelector('.job-list')
//   .addEventListener('click', delButtonHandler);
