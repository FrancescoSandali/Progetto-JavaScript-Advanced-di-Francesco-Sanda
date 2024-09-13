
//Create Element

export function createElementDom(tagName, innerHTML, className){
    const element= document.createElement(tagName);
    element.innerHTML = innerHTML;
    element.className = className;
    return element
}


//Crea Funzione generaCard