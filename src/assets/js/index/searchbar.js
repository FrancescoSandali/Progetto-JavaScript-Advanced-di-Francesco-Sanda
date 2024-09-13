//File Js
import {createElementDom} from '../utilities.js';
import { body } from "./index.js";


//Import file css
import'../../css/style.css';

export function createSearchBar(){

    //Create Container
    const containerLight = createElementDom('section','', 'container-light');
    body.append(containerLight);

    //Title of this container

    const titlesection = createElementDom('h3','Cerca i libri per la tua categoria preferita', 'text-1 mb-3');
    containerLight.append(titlesection);

    //Create containerSearchbar
    const containerSearchbar = createElementDom('div','','containerSearchbar')
    containerLight.append(containerSearchbar);

    //Create Searchbar
    const searchBar = createElementDom('input','','searchbar')
    searchBar.setAttribute('id', 'searchInput');
    containerSearchbar.append(searchBar);

    return containerSearchbar;
     
}