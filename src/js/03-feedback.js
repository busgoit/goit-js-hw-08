import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const WARNING_MESSAGE = 'You must complete all form fields!';

let formData = {};
restoreForm();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(event) {
  event.preventDefault();
  const isFormData = formData.email && formData.message;

  if (!isFormData) return alert(WARNING_MESSAGE);

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};

  console.log(STORAGE_KEY, formData);
  console.log('email: ', formData.email);
  console.log('message: ', formData.message);
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

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function restoreForm() {
  if (localStorage.getItem(STORAGE_KEY)) {
    const savedData = localStorage.getItem(STORAGE_KEY);
    formData = JSON.parse(savedData);

    form.email.value = formData.email ? formData.email : '';
    form.message.value = formData.message ? formData.message : '';
  }
}
