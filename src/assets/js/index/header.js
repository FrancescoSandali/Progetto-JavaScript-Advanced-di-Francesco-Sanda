//File Js
import {createElementDom} from '../utilities.js';
import { body } from "./index.js";

// Import image
import logoImg from '../../img/logo.png';

//Import file css
import'../../css/style.css';

//---- HEADER SECTION

export function createHeader(){   

    //Create Menu
    const header = createElementDom('header','', 'header-menu');
    body.append(header);
    
    //Create Logo
    const logoHeader = createElementDom('img', '', 'header-logo');
    logoHeader.src = logoImg;
    header.append(logoHeader);
    
    //Create Ul
    const navbar = createElementDom('ul','', 'navbar');
    header.append(navbar);

    //Create link of menu 

    const links = [
        {
            name: 'Portfolio',
            url :'https://francescosandali.github.io/Progetto-HTML-e-CSS/index.html'
        },
        {
            name: 'Counter',
            url :'https://francescosandali.github.io/Progetto-Javascript-Basic-di-Sandali-Franceso/'
        },
    ];

    links.forEach(link=>{
        const navbarElement = createElementDom('li','', 'navbarElement');
        const navbarElementLink = createElementDom('a',link.name, 'navbarLinkElement');
        navbarElementLink.href = link.url;
        navbarElementLink.target = '_blank';
        navbar.append(navbarElement);
        navbarElement.append(navbarElementLink);
    })

}
