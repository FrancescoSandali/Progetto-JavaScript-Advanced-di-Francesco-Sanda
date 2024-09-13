//Import all file js
import {createElementDom} from '../utilities.js';
import { createHeader } from './header.js';
import { createMediaText } from './mediatext.js';
import { createSearchBar } from './searchbar.js';
import { generateCardContainer } from './card.js';
import {  GetBook } from '../api.js';
import {startAnimation} from '../animations.js';



// Import image
import placeHolder from '../../img/placeholder.png';

//Import file css
import'../../css/style.css';

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
const searchButton = createElementDom('button','Ricerca','searchbutton')
containerSearchbar.append(searchButton);

//Add event listener on searchbutton
searchButton.addEventListener("click", async (e)=>{
    const subjectData = searchInput.value;
    let   subjectDataSave = await  GetBook(subjectData,10); //get data
    const books = subjectDataSave.works.map(work=>{ //filter data
        return{
            author : work.authors ? work.authors.map(author => author.name).join(', ') : 'The author is unknown',
            title : work.title,
            bookImage : work.cover_id ? `https://covers.openlibrary.org/b/id/${work.cover_id}.jpg` : 'placeHolder',
            key : work.key
        };
    subjectData = '';
    })

    //reset content of card container
    while(cardContainer.firstChild){
        cardContainer.removeChild(cardContainer.firstChild);
    }

    //Set function generateCards
    books.forEach (book => generateCards(book));
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

