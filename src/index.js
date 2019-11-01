import './index.html';
import './css/style.css';
import fetchCountries from './js/fetchCountries.js'
let _ = require('lodash');

const inputForm = document.querySelector('.main__input');
const targetSpan = document.querySelector('.target__span');
let dataFromInput;

const insertResultToDOM = (textToInsert) => {
    if (textToInsert) {
        targetSpan.innerHTML = textToInsert;
    } else {
        targetSpan.innerHTML = "Kindly specify your request...";
    }
}

const preparingRequest = (e) => {
    dataFromInput = e.target.value;
    if (dataFromInput) {
        fetchCountries(dataFromInput).then(parseString => insertResultToDOM(parseString));
    } else {
        insertResultToDOM(dataFromInput);
    }
};

inputForm.addEventListener('input', _.debounce(preparingRequest, 500));

