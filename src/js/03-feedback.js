const elements = {
    inputEmail: document.querySelector('[name="email"]'),
    message: document.querySelector('[name="message"]'),
    button: document.querySelector('[type="submit"]'),
    form: document.querySelector('.feedback-form')
}

const LOCAL_KEY = "feedback-form-state";

elements.inputEmail.addEventListener('input', onEmail);
elements.message.addEventListener('input', onMessage);
elements.button.addEventListener('click', onClick);

const localStorageValue = { email: "", message: "" }

if (localStorage.getItem(LOCAL_KEY)) {
    const values = JSON.parse(localStorage.getItem(LOCAL_KEY));
    elements.inputEmail.value = values.email;
    elements.message.value = values.message; 

    
}

function onEmail(event) {
    localStorageValue.email = event.currentTarget.value;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(localStorageValue))    
} 

function onMessage(event) {
    localStorageValue.message = event.currentTarget.value;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(localStorageValue))    
}

function onClick(event) {
    event.preventDefault();
    console.log(localStorageValue);
    localStorage.removeItem(LOCAL_KEY);
    elements.form.reset();
}