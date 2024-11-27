import { Zoo } from "../../controllers/Zoo.js";
import {
    capitalizeFirstLetter,
    setFeedbackMessage,
    toggleErrorClass,
} from "../../utils/utils.js";
import { FORMS } from "../../consts/consts.js";

let zoo = new Zoo();

const btnContainer = document.getElementById("animalButtons");
const inputText = document.getElementById("inputText");
const outputDiv = document.getElementById("outputDiv");
const outputText = document.getElementById("outputText");
const outputTitle = document.getElementById("outputTitle");
const nameInput = document.getElementById("newAnimalName");
const soundInput = document.getElementById("newAnimalSound");

function generateAnimalButtons() {
    btnContainer.innerHTML = "";

    for (const animal in zoo.animals) {
        const btn = document.createElement("button");

        btn.classList.add("btn-animal");
        btn.textContent = capitalizeFirstLetter(animal);
        btn.onclick = () => speakAnimal(animal);

        btnContainer.appendChild(btn);
    }
}

function speakAnimal(animalKey) {
    const animal = zoo.animals[animalKey];
    const inputValue = inputText.value.trim();

    const hasInputError = !inputValue;
    const hasAnimalError = !animal;

    toggleErrorClass(inputText, hasInputError || hasAnimalError);

    if (hasInputError) {
        outputDiv.style.display = "none";
        setFeedbackMessage(
            "Please enter some message for the animals to speak.",
            FORMS.SPEAK
        );
        return;
    }

    if (hasAnimalError) {
        outputDiv.style.display = "none";
        setFeedbackMessage(`Animal '${animalKey}' not found.`, FORMS.SPEAK);
        return;
    }

    outputTitle.textContent = `${capitalizeFirstLetter(animal.name)} says:`;
    outputText.textContent = animal.speak(inputValue);

    setFeedbackMessage("", FORMS.SPEAK);
    setFeedbackMessage("");

    outputDiv.style.display = "flex";
}

function handleAnimalFormSubmit(event) {
    event.preventDefault();

    outputDiv.style.display = "none";

    const nameValue = nameInput.value.trim().toLowerCase();
    const soundValue = soundInput.value.trim().toLowerCase();

    const hasNameError = !nameValue;
    const hasSoundError = !soundValue;

    toggleErrorClass(nameInput, hasNameError);
    toggleErrorClass(soundInput, hasSoundError);

    if (hasNameError || hasSoundError) {
        setFeedbackMessage(
            "Please provide both animal name and sound.",
            FORMS.ADD
        );
        return;
    }

    try {
        zoo.addAnimal(nameValue, soundValue);

        generateAnimalButtons();

        setFeedbackMessage(`Animal '${nameValue}' added successfully!`);
        setFeedbackMessage("", FORMS.ADD);
    } catch (error) {
        console.error(error.message);
        setFeedbackMessage(error.message, FORMS.ADD);
    } finally {
        setTimeout(() => setFeedbackMessage(""), 3000);
    }

    nameInput.value = "";
    soundInput.value = "";
}

document
    .getElementById("animalForm")
    .addEventListener("submit", handleAnimalFormSubmit);

generateAnimalButtons();
