let currentPosSmallCarousel = 0;
let offset = 0;
(() => {
    const typePortrait = document.querySelector('.carousel-small--center--pics');
    let quanPortraits = currentArtist.numberPicAuthor;
    if (currentArtist.numberPicAuthor > 3) {
        quanPortraits = 3;
    }
    for (let i = 0; i < quanPortraits; i++) {
        typePortrait.insertAdjacentHTML('beforeend', `<img class="pic-author duration-move pic-author${i}" src="pic/${artistName}/author${i}.jpg">`);
    }
    const butLeft = document.getElementById('but-small-left');
    const butRight = document.getElementById('but-small-right');
    butLeft.addEventListener('click', movePortraitsLeft);
    butRight.addEventListener('click', movePortraitsRight);
    if (currentPosSmallCarousel == 0) {
        if (!butLeft.classList.contains('hidden')) {
            butLeft.classList.add('hidden');
        }
    }
    if (currentPosSmallCarousel == currentArtist.numberPicAuthor - 1) {
        if (!butRight.classList.contains('hidden')) {
            butRight.classList.add('hidden');
        }
    }
})();
function movePortraitsLeft() {
    const typePortrait = document.querySelector('.carousel-small--center--pics');
    const portraitsElem = document.querySelectorAll('.pic-author');
    const butLeft = document.getElementById('but-small-left');
    const butRight = document.getElementById('but-small-right');
    butLeft.removeEventListener('click', movePortraitsLeft);
    if (currentPosSmallCarousel == 1) {
        currentPosSmallCarousel--;
        if (typePortrait.classList.contains('moveRight')) {
            typePortrait.classList.remove('moveRight');
        }
        if (!butLeft.classList.contains('hidden')) {
            butLeft.classList.add('hidden');
        }
        return;
    }
    for (let i = 0; i < 3; i++) {
        if (portraitsElem[i].classList.contains('moveRight')) {
            portraitsElem[i].classList.remove('moveRight');
        }
        if (!portraitsElem[i].classList.contains('duration-move')) {
            portraitsElem[i].classList.add('duration-move');
        }
    }
    if (currentPosSmallCarousel == currentArtist.numberPicAuthor - 1) {
        if (butRight.classList.contains('hidden')) {
            butRight.classList.remove('hidden');
        }
        if (currentArtist.numberPicAuthor == 2 && butLeft.classList.contains('hidden')) {
            butLeft.classList.add('hidden');
        }
        currentPosSmallCarousel--;
        butRight.addEventListener('click', movePortraitsRight);
        setTimeout(function () {
            butLeft.addEventListener('click', movePortraitsLeft);
        }, 700);
        return;
    }
    currentPosSmallCarousel--;
    portraitsElem[0].classList.add('moveLeft');
    portraitsElem[1].classList.add('moveLeft');
    portraitsElem[2].classList.add('moveLeft');
    if (butLeft.classList.contains('hidden')) {
        butLeft.classList.remove('hidden');
    }
    if (currentPosSmallCarousel > 0) {
        setTimeout(function () {
            pasteDelPic('left');
            offset--;
            portraitsElem[0].classList.remove('duration-move');
            portraitsElem[1].classList.remove('duration-move');
            portraitsElem[0].classList.remove('moveLeft');
            portraitsElem[1].classList.remove('moveLeft');
            butLeft.addEventListener('click', movePortraitsLeft);
        }, 700);
    }
}
function movePortraitsRight() {
    const typePortrait = document.querySelector('.carousel-small--center--pics');
    const portraitsElem = document.querySelectorAll('.pic-author');
    const butLeft = document.getElementById('but-small-left');
    const butRight = document.getElementById('but-small-right');
    butRight.removeEventListener('click', movePortraitsRight);
    if (currentPosSmallCarousel == 0) {
        currentPosSmallCarousel++;
        typePortrait.classList.add('moveRight');
        if (butLeft.classList.contains('hidden')) {
            butLeft.classList.remove('hidden');
        }
        butLeft.addEventListener('click', movePortraitsLeft);
        setTimeout(function () {
            butRight.addEventListener('click', movePortraitsRight);
        }, 700);
        return;
    }
    currentPosSmallCarousel++;
    if (!portraitsElem[1].classList.contains('duration-move')) {
        portraitsElem[1].classList.add('duration-move');
        portraitsElem[2].classList.add('duration-move');
    }
    portraitsElem[0].classList.add('moveRight');
    portraitsElem[1].classList.add('moveRight');
    portraitsElem[2].classList.add('moveRight');
    if (currentPosSmallCarousel < currentArtist.numberPicAuthor - 1) {

        if (butLeft.classList.contains('hidden')) {
            butLeft.classList.remove('hidden');
        }
        if (currentPosSmallCarousel > 1) {
            setTimeout(function () {
                pasteDelPic('right');
                offset--;
                portraitsElem[1].classList.remove('duration-move');
                portraitsElem[2].classList.remove('duration-move');
                portraitsElem[1].classList.remove('moveRight');
                portraitsElem[2].classList.remove('moveRight');
                butRight.addEventListener('click', movePortraitsRight);
            }, 700);

        }
    } else {
        butRight.classList.add('hidden');
        if (currentArtist.numberPicAuthor == 2 && butLeft.classList.contains('hidden')) {
            butLeft.classList.remove('hidden');
        }
    }
}

function pasteDelPic(direction) {
    const typePortrait = document.querySelector('.carousel-small--center--pics');
    const portraitsElem = document.querySelectorAll('.pic-author');
    if (direction == "left") {
        portraitsElem[2].remove();
        typePortrait.insertAdjacentHTML('afterbegin', `<img class="pic-author pic-author${currentPosSmallCarousel - 1}" src="pic/${artistName}/author${currentPosSmallCarousel - 1}.jpg">`);
    } else {
        portraitsElem[0].remove();
        typePortrait.insertAdjacentHTML('beforeend', `<img class="pic-author pic-author${currentPosSmallCarousel + 1}" src="pic/${artistName}/author${currentPosSmallCarousel + 1}.jpg">`);

    }
}
