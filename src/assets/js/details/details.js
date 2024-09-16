// Create URL page
const urlParams = new URLSearchParams(window.location.search);
const bookKey = urlParams.get('bookKey');
const ratingsKey = bookKey;

//Import all file js
import {createElementDom} from '../utilities.js'
import { GetBookDetails } from '../api.js';
import { GetBookRatings } from '../api.js';
import { createHeader } from './header.js';
import { createMediaText } from './mediatext.js';

//Import file css
import'../../css/style.css';

//Creation of costant body
const bodyReal = document.body;
export const body = createElementDom('div', '', 'overflow');
bodyReal.append(body);

// Import Basic image
import placeHolder from '../../img/placeholder.png';
const imageBase = placeHolder

import { setFavicon } from '../utilities.js';
//Set Favicon
import Favicon from '../../img/favicon.png';
setFavicon(Favicon);

//Create layout in the page
createHeader();
GetBookDetails(bookKey);
GetBookRatings(ratingsKey);

//Create book details container

document.addEventListener('DOMContentLoaded', async ()=>{
    
    if(bookKey){ //Book Key is created ?
        try{
            const detailsBookDataSave = await GetBookDetails(bookKey);
            console.log(detailsBookDataSave);
            const ratingsBookDataSave = await GetBookRatings(ratingsKey);

            //Extraction of Image
            const detailsImage = detailsBookDataSave.covers[0];
            const imageUrl = detailsImage ? `https://covers.openlibrary.org/b/id/${detailsImage}-M.jpg` : imageBase;

            //Extraction of Title
            const detailsTitle = detailsBookDataSave.title;

            //Extraction of Description
            let detailsDescription = '';
            if(typeof detailsBookDataSave.description === 'string'){
                detailsDescription =  detailsBookDataSave.description;
            }else if(detailsBookDataSave.description === 'object' && detailsBookDataSave.description.value){
                detailsDescription = detailsBookDataSave.description.value;
            }else{
                detailsDescription = 'No description available';
            }
            console.log(detailsDescription );


            //Extraction of Valutation Value
            const ratingsValue = ratingsBookDataSave.summary.average;

             //Extraction of Valutation Count
             const ratingsCount = ratingsBookDataSave.summary.count;

             createMediaText(imageUrl, detailsTitle, detailsDescription, ratingsValue, ratingsCount);

        }catch(e){
            console.error("There is an error in the loading of book's details: ", e);
        };
    }else{
        console.error('The BookKey is not created');
    }
})



