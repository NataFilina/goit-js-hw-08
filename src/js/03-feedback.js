import throttle from 'lodash.throttle';

const elements = {
    form: document.querySelector('.feedback-form')
}

const LOCAL_KEY = "feedback-form-state";
let localStorageValue = {};

elements.form.addEventListener('submit', onSubmit);
elements.form.addEventListener('input', throttle(onInput, 500));

refreshForm();
function refreshForm() {
    try {
        const saveData = localStorage.getItem(LOCAL_KEY);
        if (!saveData) return;
        localStorageValue = JSON.parse(saveData);
        Object.entries(localStorageValue).forEach(([key, val]) => {
            elements.form.elements[key].value = val;
        });
    }
    catch ({ message }) {
        console.log(message);
    }
}

function onInput(event) {
    const { name, value } = event.target;
    localStorageValue[name] = value.trim();
    localStorage.setItem(LOCAL_KEY, JSON.stringify(localStorageValue))
}

function onSubmit(event) {
    event.preventDefault();
    console.log(localStorageValue);
    localStorageValue = {};
    localStorage.removeItem(LOCAL_KEY);
    elements.form.reset();
}

// Неправильний варіант
// const elements = {
//     inputEmail: document.querySelector('[name="email"]'),
//     message: document.querySelector('[name="message"]'),
//     button: document.querySelector('[type="submit"]'),
//     form: document.querySelector('.feedback-form')
// }

// const LOCAL_KEY = "feedback-form-state";

// elements.inputEmail.addEventListener('input', throttle(onEmail, 500, {
//       'trailing': false
//     }));
// elements.message.addEventListener('input', throttle(onMessage, 500, {
//       'trailing': false
//     }));
// elements.button.addEventListener('click', onClick);

// const localStorageValue = { email: "", message: "" }

// if (localStorage.getItem(LOCAL_KEY)) {
//     const values = JSON.parse(localStorage.getItem(LOCAL_KEY));
//     elements.inputEmail.value = values.email;
//     elements.message.value = values.message;     
// }

// function onEmail(event) {
//     localStorageValue.email = event.currentTarget.value;
//     localStorage.setItem(LOCAL_KEY, JSON.stringify(localStorageValue))    
// } 

// function onMessage(event) {
//     localStorageValue.message = event.currentTarget.value;
//     localStorage.setItem(LOCAL_KEY, JSON.stringify(localStorageValue))
// }

// function onClick(event) {
//     event.preventDefault();
//     console.log(localStorageValue);
//     localStorage.removeItem(LOCAL_KEY);
//     elements.form.reset();
// }