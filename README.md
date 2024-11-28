# Zoo Speak - JavaScript Exercise

# Description

    This project is a simple JavaScript application that simulates a zoo where animals can "speak." Each animal has a specific sound, and the user can interact with the application to:

        - Add new animals with unique sounds.
        - Make animals "speak" based on user-provided input.
        - View dynamically generated buttons for each animal.

    The application uses JavaScript for logic, CSS for styling, and HTML for structure. The design follows an organized approach with a Zoo controller managing a collection of Animal models.

# Features

    - Animal Collection:
        Animals have properties like name and sound.
        Animals can "speak" by adding their sound between words in a sentence.

    - Dynamic Button Generation:
        Buttons are generated dynamically for each animal in the zoo.

    - Animal Addition:
        Users can add new animals with custom names and sounds.

    - Responsive Design:
        The interface is mobile-friendly, adapting seamlessly to various screen sizes.

    - Feedback System:
        Displays messages for errors or successful actions (e.g., invalid input, animal added).

# Installation

    - Clone the repository:

        git clone https://github.com/your-username/zoo-speak.git

    - Navigate to the project directory

    - Open index.html in a browser or serve it using a local server for better compatibility:

        Using Live Server in VSCode.

# Usage

    - Open the application in your browser.
    - Enter a message in the input field.
    - Click on any animal button to see its "speak" functionality.
    - Add new animals by filling in the "Animal Name" and "Animal Sound" fields, then clicking "Add Animal."
    - Watch the dynamic list of animal buttons update as new animals are added.

# Technologies Used

    HTML: Structure of the application.
    CSS: Styling and responsiveness.
    JavaScript: Logic for dynamic interaction.    

# Key Classes

    Animal:
        - Represents individual animals.
        - Properties: name and sound.
        - Method: speak(input) - Generates a string interspersed with the animal's sound.

    Zoo:
        - Manages the collection of animals.
        - Methods:
            addAnimal(name, sound): Adds a new animal to the zoo.
            animals: Stores all animal objects.

            
-------------------------------------------------

# URL Variables Extractor

This project provides a JavaScript-based utility to extract variable parts of a URL into a structured object. The extracted variables include both dynamic segments from the URL path and query parameters. It is designed to handle URLs based on a predefined format.

# Features

    - Extracts dynamic path segments (e.g., /:id, /:name) from a URL.
    - Parses query parameters (e.g., ?key=value) into key-value pairs.
    - Automatically converts numeric strings to numbers.
    - Provides simple error handling for empty inputs.

# Installation

    - Clone this repository and add the script to your project.

        git clone <repository-url>

     - Open index.html in a browser or serve it using a local server for better compatibility:

        Using Live Server in VSCode.

# Usage

    This project includes a simple form handler for testing the URL extractor.
    - Form Inputs:

        URL Format: A string defining the format (e.g., /:version/api/:collection/:id).
        URL Value: A real URL instance to extract values from (e.g., /6/api/listings/3?sort=desc&limit=10).

    - Output:

        The extracted variables are displayed in JSON format.
