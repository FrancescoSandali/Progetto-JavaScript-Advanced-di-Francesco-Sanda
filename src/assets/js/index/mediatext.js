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
        const title = createElementDom('h1','Find your next favourite book for each kind', 'text-1 text-reveal');
        text.append(title);

        //Create Subtitle
        const subTitle = createElementDom('h2','Explore a so extended selection of books for every interests you have', 'text-2 mt-1 text-reveal');
        title.after(subTitle);

        //Create paragraph
        const paragraph = createElementDom('p',`You are a books lover, but you don’t know what  to choose? <br> Click on the button find more and your doubts will disappear. <br> Insert the kind wished in the research’s area and you will obtain a list of corresponded books. <br> For each book, the title, the author and a small description will be showed to you; by this way, you will find easily your next book.`,'mt-1 mb-2 text-reveal');
        subTitle.after(paragraph);

        //Create button
        const button = createElementDom('a',"Read More",'button fade-up');
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