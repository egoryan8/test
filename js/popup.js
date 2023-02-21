let loginButton = document.querySelector('.login_button');
let loginPopUp = document.querySelector('.login_popup');

console.log(loginButton)
console.log(loginPopUp)

loginButton.addEventListener('click', showPopUp);

function showPopUp(evt) {
    console.log(evt);
    evt.preventDefault();

    loginPopUp.classList.toggle('show-popup');
}

