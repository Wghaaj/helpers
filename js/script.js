console.log('It works!');

const nameField = document.getElementById('nameField');
const form = document.getElementById('mainForm');
const userInfo = document.getElementById('userInfo');
const userName = document.getElementById('userName');
const logoutButton = document.getElementById('logout');

function formHandler(event) {
    event.preventDefault();

    const name = nameField.value.trim();

    if (name) {
        localStorage.setItem('nameField', name);
        toggleSections(true);
    }
}

function logoutHandler(event) {
    localStorage.removeItem('nameField');
    toggleSections(false);
    nameField.value = '';
}

function toggleSections(hasUser = false) {
    if (hasUser) {
        const name = localStorage.getItem('nameField');
        userName.textContent = name;
        userInfo.classList.remove('hidden');
        form.classList.add('hidden');
    } else {
        userInfo.classList.add('hidden');
        form.classList.remove('hidden');
    }
}

function getFromStorage() {
    const name = localStorage.getItem('nameField');
    if (name) {
        toggleSections(true);
    } else {
        toggleSections(false);
    }
}

function submitHandler(event) {
    event.preventDefault();
    formHandler(event);
}

form.addEventListener('submit', submitHandler);
logoutButton.addEventListener('click', logoutHandler);

getFromStorage();