/*
function openModalWindow(picture) {
    const modalPic = document.querySelector('.modal-pic-author');
    modalPic.insertAdjacentHTML('afterbegin', `<img src="pic/${artistName}/${picture}.jpg">`);
    const modalWin = document.querySelector('.modal-back-author');
    modalWin.classList.remove("invisible");
    const body = document.querySelector('body');
    body.classList.add("hid-scroll");
}
function closeWindow() {
    document.querySelector('.modal-pic-author > img').remove();
    const modalWin = document.querySelector('.modal-back-author');
    modalWin.classList.add("invisible");
    const body = document.querySelector('body');
    body.classList.remove("hid-scroll");
}
(() => {
    let authPortrait = [];
    for (let i = 0; i < currentArtist.numberPicAuthor; i++) {
        authPortrait[i] = document.querySelector(`.pic-author${i}`);
    }
    const buttonClose = document.getElementById('but0');
    for (let i = 0; i < currentArtist.numberPicAuthor; i++) {
        authPortrait[i].addEventListener("click", function () { openModalWindow(`full${i}`) });
    }
    buttonClose.addEventListener("click", closeWindow);
})();
*/
(() => {
    let picArray = [];
    let idPic = "";
    for (let i = 0; i < currentArtist.numberPic; i++) {
        idPic = "pic" + (i + 1);
        picArray[i] = document.getElementById(idPic);
        picArray[i].addEventListener("click", function () { openModalGallery(i + 1) });
    }
    const buttonClose = document.getElementById('but1');
    buttonClose.addEventListener("click", closeModalGallery);
    const butLeft = document.getElementById('but2');
    const butRight = document.getElementById('but3');
    butLeft.addEventListener("click", function () { turnPic("left") });
    butRight.addEventListener("click", function () { turnPic("right") });
})();
let currentPic = 0;
function openModalGallery(picture) {
    currentPic = picture;
    const modalPic = document.querySelector('.modal-pic-pic');
    modalPic.insertAdjacentHTML('afterbegin', `<img src="pic/${artistName}/${picture}.jpg">`);
    const modalTitle = document.querySelector('.modal-title');
    modalTitle.insertAdjacentHTML('afterbegin', `<p class="title-pic-modal">${currentArtist.titles[picture - 1]}</p>`);
    const modalWin = document.querySelector('.modal-back-pic');
    modalWin.classList.remove("invisible");
    const body = document.querySelector('body');
    body.classList.add("hid-scroll");
    checkButtons("open");
}
function closeModalGallery() {
    document.querySelector('.modal-pic-pic > img').remove();
    document.querySelector('.title-pic-modal').remove();
    const modalWin = document.querySelector('.modal-back-pic');
    modalWin.classList.add("invisible");
    const body = document.querySelector('body');
    body.classList.remove("hid-scroll");
    checkButtons("close");
}
function turnPic(direction) {
    if (direction == "left") {
        if (currentPic == 1) {
            return;
        } else {
            currentPic--;
        }
    } else {
        if (currentPic == currentArtist.numberPic) {
            return;
        } else {
            currentPic++;
        }
    }
    const modalPic = document.querySelector('.modal-pic-pic');
    modalPic.insertAdjacentHTML('afterbegin', `<img src="pic/${artistName}/${currentPic}.jpg">`);
    const pics = document.querySelectorAll('.modal-pic-pic > img');
    pics[1].remove();
    document.querySelector('.title-pic-modal').remove();
    const modalTitle = document.querySelector('.modal-title');
    modalTitle.insertAdjacentHTML('afterbegin', `<p class="title-pic-modal">${currentArtist.titles[currentPic - 1]}</p>`);
    const butLeft = document.getElementById("but2");
    const butRight = document.getElementById("but3");
    switch (currentPic) {
        case 1:
            butLeft.classList.toggle('hidden');
            break;
        case currentArtist.numberPic:
            butRight.classList.toggle('hidden');
            break;
        case 2:
            if (butLeft.classList.contains('hidden')) {
                butLeft.classList.toggle('hidden');
            }
            break;
        case currentArtist.numberPic - 1:
            if (butRight.classList.contains('hidden')) {
                butRight.classList.toggle('hidden');
            }
            break;
    }
}
function checkButtons(value) {
    const butLeft = document.getElementById("but2");
    const butRight = document.getElementById("but3");
    if (value == "close") {
        if (butLeft.classList.contains('hidden')) {
            butLeft.classList.remove('hidden');
        } else if (butRight.classList.contains('hidden')) {
            butRight.classList.remove('hidden');
        }
        return;
    }
    if (value == "open" && (currentPic == 1 || currentPic == currentArtist.numberPic)) {
        if (currentPic == 1 && !butLeft.classList.contains('hidden')) {
            butLeft.classList.add('hidden');
        }
        if (currentPic == currentArtist.numberPic && !butRight.classList.contains('hidden')) {
            butRight.classList.add('hidden');
        }
        return;
    }
}