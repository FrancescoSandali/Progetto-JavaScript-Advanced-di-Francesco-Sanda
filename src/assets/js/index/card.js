//File Js
import {createElementDom} from '../utilities.js';
import { body } from "./index.js";


export function generateCardContainer(){
    const cardContainer = createElementDom('div', '', 'cardContainer');
    body.append(cardContainer);
    return  cardContainer;
}
