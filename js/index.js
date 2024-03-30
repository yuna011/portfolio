const mail = document.querySelector(`.fa-envelope`);
const contact = document.querySelector(`.contactWrap`);
const closed = document.querySelector(`.fa-xmark`);
const modal = document.querySelector(`.modal`);


const user = document.querySelector(`.fa-user`);
const profile = document.querySelector(`.pWrap`);

mail.onclick = () => {
    contact.style.display = `block`;
}
closed.onclick = () => {
    modal.style.display = `none`;
}

user.onclick = () => {
    profile.style.display = `block`;
}

