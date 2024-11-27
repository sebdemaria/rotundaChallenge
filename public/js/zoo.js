import { Zoo } from "../../controllers/Zoo.js";
import { capitalizeFirstLetter } from "../../utils/utils.js";

let zoo;

const btnContainer = document.getElementById("animalButtons");
const animalAddMsg = document.getElementById("process-feedback-msg");
const inputText = document.getElementById("inputText");
const outputDiv = document.getElementById("outputDiv");
const outputText = document.getElementById("outputText");
const outputTitle = document.getElementById("outputTitle");
const feedbackMsg = document.getElementById("process-feedback-msg");

function generateZoo() {
    zoo = new Zoo();

    generateAnimalButtons();
}

function generateAnimalButtons() {
    btnContainer.innerHTML = "";

    for (const animal in zoo.animals) {
        const btn = document.createElement("button");

        btn.classList.add("btn-animal");

        btn.textContent = animal;

        btn.onclick = () => speakAnimal(animal);

        btnContainer.appendChild(btn);
    }
}

function speakAnimal(animalKey) {
    const animal = zoo.animals[animalKey];

    inputText.style.borderColor = "rgb(50, 53, 54)";
    inputText.classList.toggle("input-common");
    inputText.classList.toggle("input-err");

    if (!inputText.value.trim()) {
        inputText.classList.toggle("input-err");

        feedbackMsg.textContent =
            "Please enter some text for the animals to speak.";

        return;
    }

    if (!animal) {
        feedbackMsg.textContent = `Animal '${animalKey}' not found.`;

        return;
    }

    outputTitle.textContent = `${capitalizeFirstLetter(animal.name)} says:`;
    outputText.textContent = animal.speak(inputText.value);
    feedbackMsg.textContent = "";

    outputDiv.style.display = "flex";
}

window.handleAddAnimal = function () {
    outputDiv.style.display = "none";

    const nameInput = document
        .getElementById("newAnimalName")
        .value.trim()
        .toLowerCase();

    const soundInput = document
        .getElementById("newAnimalSound")
        .value.trim()
        .toLowerCase();

    if (!nameInput || !soundInput) {
        animalAddMsg.textContent = "Please provide both animal name and sound.";
        nameInput.classList.toggle("input-common");
        nameInput.classList.toggle("input-err");
        soundInput.classList.toggle("input-common");
        soundInput.classList.toggle("input-err");
        return;
    }

    try {
        nameInput.style.borderColor = "red";
        soundInput.style.borderColor = "red";

        zoo.addAnimal(nameInput, soundInput);

        generateAnimalButtons();

        animalAddMsg.textContent = `Animal '${nameInput}' added successfully!`;
    } catch (error) {
        console.error(error.message);
        animalAddMsg.textContent = String(error.message);
    } finally {
        // clear msg after 3 secs
        setTimeout(() => {
            animalAddMsg.textContent = "";
        }, 3000);
    }

    document.getElementById("newAnimalName").value = "";
    document.getElementById("newAnimalSound").value = "";
};

// generate zoo on page load
generateZoo();
