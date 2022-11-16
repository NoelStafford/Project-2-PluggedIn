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

    if (response.ok) {
      document.location.replace('/job');
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
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.job-list')
  .addEventListener('click', delButtonHandler);
