function getArtistInfo() {
    const artistsListMax = picName.length;
    for (let i = 0; i < artistsListMax; i++) {
        if (picName[i].id == artistName) {
            currentArtist.name = picName[i].name;
            currentArtist.fullName = picName[i].fullName;
            currentArtist.yearsLife = picName[i].yearsLife;
            currentArtist.country = picName[i].country;
            currentArtist.style = picName[i].style;
            currentArtist.numberPicAuthor = picName[i].numberPicAuthor;
            currentArtist.numberPic = picName[i].numberPic;
            currentArtist.titles = picName[i].titles;
        }
    }
}
const query = new URLSearchParams(window.location.search);
const artistName = query.get("artist");
let currentArtist = {};
getArtistInfo();
const titlePage = document.querySelector('title');
titlePage.insertAdjacentText('afterbegin', currentArtist.name);
const head = document.querySelector('h1');
head.insertAdjacentText('afterbegin', currentArtist.name);
const head1 = document.querySelector('.head1');
head1.insertAdjacentHTML('beforeend', `<p class="fullname"><b>Полное имя:</b> ${currentArtist.fullName}</p>`);
head1.insertAdjacentHTML('beforeend', `<p class="fullname"><b>Годы жизни:</b> ${currentArtist.yearsLife}</p>`);
head1.insertAdjacentHTML('beforeend', `<p class="fullname"><b>Страна:</b> ${currentArtist.country}</p>`);
head1.insertAdjacentHTML('beforeend', `<p class="fullname"><b>Стиль:</b> ${currentArtist.style}</p>`);