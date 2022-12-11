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