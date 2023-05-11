const gallery = document.querySelector('main');
let textHTML = "";
for (let i = 0; i < currentArtist.numberPic; i++) {
    if (i % 4 == 0) {
        if (i > 0) {
            textHTML += '</div>';
            textHTML += '</div>';
        }
        textHTML += '<div class="gallery">';
    }
    if (i % 2 == 0) {
        if (i > 0 && i % 4 != 0) {
            textHTML += '</div>';
        }
        textHTML += '<div class="block-2-pic">';
    }
    textHTML += '<div class="art">';
    textHTML += `<img id="pic${i + 1}" class="picture" src="pic/${artistName}/${i + 1}.jpg">`;
    textHTML += `<p class="title-pic">${currentArtist.titles[i]}</p>`;
    textHTML += '</div>';
}
textHTML += '</div>';
textHTML += '</div>';
gallery.insertAdjacentHTML('beforeend', textHTML);
