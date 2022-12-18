/******最初のsectionへidを付与******/
const mainElement = document.getElementById("MainContent");
const mainFirstElementChild = mainElement.firstElementChild;

mainFirstElementChild.setAttribute("id", first - section);
/********************************/


const logoImgWrapper = document.getElementsByClassName("header__heading-link");
const logoImg = logoImgWrapper[0].firstElementChild;

const logoImgSrc = logoImg.getAttribute("src");

logoImgWrapper.style.setProperty('-webkit-mask-image', `url(${logoImgSrc})`);



const instaSection = getElementById("insta-feed");
const instaAnchor = document.createElement('a')
instaAnchor.textContent = 'MORE'
instaSection.appendChild(instaAnchor)




if (localStorage["mgrryVisitedParam"]) {
    return;
} else {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let rand_str = '';
    for (var i = 0; i < 16; i++) {
        rand_str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    localStorage.setItem("mgrryVisitedParam", rand_str);
}
