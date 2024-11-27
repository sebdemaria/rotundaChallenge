export class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    speak(customInput) {
        const customSound = customInput.split(" ");

        return customSound.join(` ${this.sound} `) + ` ${this.sound}`;
    }
}
