//File Js
import {createElementDom} from '../utilities.js';
import { body } from "./details.js";

//Import file css
import'../../css/style.css';

export function createMediaText(image, titleBook, description, value, count){

        //Create Container
        const container = createElementDom('div', '', 'media-text media-text--details');
        body.append(container);


        //Create ContainerText
        const text = createElementDom('div','', 'media-text-write');
        container.append(text);

        //Create Title
        const title = createElementDom('h1',titleBook, 'text-1');
        text.append(title);

        //Create Subtitle
        const subTitle = createElementDom('h2',`Ratings: ${value} / 5<br> Have ratings: ${count} people`, 'text-6 mt-1');
        title.after(subTitle);

        //Create paragraph
        const paragraph = createElementDom('p',description,'mt-1 mb-2');
        subTitle.after(paragraph);

    //Create ContainerImg

        //Create Container for image
        const mediaImageContainer = createElementDom('div','', 'media-image media-image--details');
        container.append(mediaImageContainer);

        //Create Image
        const mediaImage = createElementDom('img','', 'mt-1- img-res');
        mediaImage.src = image;
        mediaImageContainer.append(mediaImage);

        const containerSpacer = createElementDom('div','', 'spacer1');
        container.after(containerSpacer);

}