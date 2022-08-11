import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

let formData = {};
restoreForm();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onFormInput(event) {
  switch (event.target) {
    case form.email:
      formData.email = form.email.value;
      break;

    case form.message:
      formData.message = form.message.value;
      break;
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function restoreForm() {
  if (localStorage.getItem('feedback-form-state')) {
    const savedData = localStorage.getItem('feedback-form-state');
    formData = JSON.parse(savedData);

    form.email.value = formData.email ? formData.email : '';
    form.message.value = formData.message ? formData.message : '';
  }
}
