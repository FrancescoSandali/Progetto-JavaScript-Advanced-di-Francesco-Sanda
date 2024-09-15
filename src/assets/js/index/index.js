//Import all file js
import {createElementDom} from '../utilities.js';
import { createHeader } from './header.js';
import { createMediaText } from './mediatext.js';
import { createSearchBar } from './searchbar.js';
import { generateCardContainer } from './card.js';
import {  GetBook } from '../api.js';
import {startAnimation} from '../animations.js';
import { setFavicon } from '../utilities.js';

// Import image
import placeHolder from '../../img/placeholder.png';

//Import file css
import'../../css/style.css';

//Set Favicon
import Favicon from '../../img/favicon.png';
setFavicon(Favicon);

//Creation of costant body
const bodyReal = document.body;
export const body = createElementDom('div', '', 'overflow');
bodyReal.append(body);

//Append all Element to body


//Create layout in the page
createHeader();
createMediaText();
const containerSearchbar = createSearchBar();
const cardContainer = generateCardContainer();

//Main function

const searchBar = createElementDom('input','','searchbar')
searchBar.setAttribute('id', 'searchInput');
containerSearchbar.append(searchBar);

const searchButton = createElementDom('button','Ricerca','searchbutton')
containerSearchbar.append(searchButton);

async function search(){
    const subjectData = searchInput.value.toLowerCase();
    let   subjectDataSave = await GetBook(subjectData,50); //get data
        const books = subjectDataSave.works.map(work=>{ //filter data
            return{
                author : work.authors ? work.authors.map(author => author.name).join(', ') : 'The author is unknown',
                title : work.title,
                bookImage : work.cover_id ? `https://covers.openlibrary.org/b/id/${work.cover_id}.jpg` : 'placeHolder',
                key : work.key
            };
    });
    searchInput.value = '';

    //reset content of card container
    while(cardContainer.firstChild){
        cardContainer.removeChild(cardContainer.firstChild);
    }
    //Set function generateCards
    books.forEach (book => generateCards(book));
} 


searchButton.addEventListener("click", search);

searchBar.addEventListener('keydown', (e)=>{
    if(e.key ==='Enter'){
        search();
    }
})

function generateCards(book){

    //Generate card
    const card = createElementDom('div', '', 'card');
    cardContainer.append(card);

    //Generate card image
    const cardImageContainer = createElementDom('div', '', 'card-image-container');
    card.append(cardImageContainer);
    const cardImage = createElementDom('img','','');
    cardImage.src = book.bookImage;
    cardImageContainer.append(cardImage);

    //Generate card text
    const cardTextContainer = createElementDom('div', '', 'card-text-container');
    card.append(cardTextContainer);

    const cardTextTitle = createElementDom('h4',book.title,'mb-1');
    cardTextContainer.append(cardTextTitle);

    const cardTextP = createElementDom('p',`Written by: ${book.author}`,'mb-3');
    cardTextTitle.after(cardTextP);

    const cardButton = createElementDom('a',`Scopri di più`,'button mt-1');
    cardTextP.after(cardButton);

    
    cardButton.addEventListener('click', ()=>{
        const newPageUrl = `details.html?bookKey=${book.key}`;
        window.location.href = newPageUrl;
    })


}

