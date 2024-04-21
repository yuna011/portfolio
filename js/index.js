const mail = document.querySelector(`.fa-envelope`);
const contact = document.querySelector(`.contactWrap`);
const modal = document.querySelectorAll(`.modal`);
const user = document.querySelector(`.fa-user`);
const profile = document.querySelector(`.pWrap`);

mail.onclick = () => {
    contact.style.display = "block";
};
user.onclick = () => {
    profile.style.display = "block";
};

const closed = document.querySelectorAll(`.fa-xmark`);
closed.forEach(function (btn) {
    btn.onclick = function () {
        var modal = btn.closest(`.modal`)
        modal.style.display = "none"
    };
});

window.onclick = function(event){
    if(event.target.className === "modal"){
        event.target.style.display = "none";
    }
};


