import { FORMS } from "../consts/consts.js";

const animalSpeakErrorMsg = document.getElementById("animal-speak-error-msg");
const animalAddErrorMsg = document.getElementById("animal-add-error-msg");
const feedbackMsg = document.getElementById("process-feedback-msg");

export function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export function setFeedbackMessage(message, form = "") {
    switch (form) {
        case FORMS.ADD:
            animalAddErrorMsg.textContent = message;
            break;
        case FORMS.SPEAK:
            animalSpeakErrorMsg.textContent = message;
            break;

        default:
            feedbackMsg.textContent = message;
            break;
    }
}

export function toggleErrorClass(element, hasError) {
    element.classList.toggle("input-common", !hasError);
    element.classList.toggle("input-err", hasError);
}