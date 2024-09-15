
//Create Element

export function createElementDom(tagName, innerHTML, className){
    const element= document.createElement(tagName);
    element.innerHTML = innerHTML;
    element.className = className;
    return element
}


//Create Favicon

export function setFavicon(imageURL) {
    let favImage = document.querySelector("link[rel~='icon']");
    if (!favImage) {
        favImage = document.createElement('link');
        favImage.rel = 'icon';
        document.head.appendChild(favImage);
    }
    favImage.href = imageURL;
}
