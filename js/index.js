const mail = document.querySelector(`.fa-envelope`);
const contact = document.querySelector(`.contactWrap`);

const user = document.querySelector(`.fa-user`);
const profile = document.querySelector(`.pWrap`);

mail.onclick = () => {
    contact.style.display = `block`;
}

user.onclick = () => {
    profile.style.display = `block`;
}

// mail.addEventListener('click', modalOpen);
// function modalOpen() {
//     contact.style.display = 'block';
// }
