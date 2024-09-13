//File Js
import {createElementDom} from '../utilities.js';
import { body } from "./index.js";


// Import image
import mediaImg from '../../img/book.png';

//Import file css
import'../../css/style.css';

export function createMediaText(){

    //Create Container

        const container = createElementDom('section','', 'media-text mt-1-');
        body.append(container);

        //Create ContainerText

        const text = createElementDom('div','', 'media-text-write');
        container.append(text);

        //Create Title
        const title = createElementDom('h1','Trova il tuo prossimo libro preferito per ogni genere', 'text-1 text-reveal');
        text.append(title);

        //Create Subtitle
        const subTitle = createElementDom('h2','Esplora una vastissima selezione di libri per ogni tuo interesse', 'text-2 mt-1 text-reveal');
        title.after(subTitle);

        //Create paragraph
        const paragraph = createElementDom('p',`Sei un appassionato di libri ma non sai cosa scegliere? <br> Clicca sul pulsante scopri di più e i tuoi dubbi svaniranno. <br> Inserisci semplicemente il genere desiderato nel campo di ricerca e otterrai una lista di libri corrispondenti.  <br> Per ogni libro, verranno mostrati il titolo, l'autore e una breve descrizione, così potrai trovare facilmente il prossimo libro da leggere.`,'mt-1 mb-2 text-reveal');
        subTitle.after(paragraph);

        //Create button
        const button = createElementDom('a',"scopri di più",'button fade-up');
        button.href = '#spacer';
        paragraph.after(button);


    //Create ContainerImg

        //Create Container for image
        const mediaImageContainer = createElementDom('div','', 'media-image fade-in ');
        container.append(mediaImageContainer);

        //Create Image
        const mediaImage = createElementDom('img','', 'img-res mt-1- parallax');
        mediaImage.src = mediaImg;
        mediaImageContainer.append(mediaImage);

        //spacer
        const containerSpacer = createElementDom('div','', 'spacer');
        containerSpacer.id = 'spacer';
        container.after(containerSpacer);

}