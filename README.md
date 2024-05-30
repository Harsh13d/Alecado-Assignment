# Babylon.js Room Movement Project

This project demonstrates a simple 3D room created using the Babylon.js framework. It includes a movable, textured box that can be controlled using keyboard inputs.

## Project Structure

- `index.html`: The main HTML file that sets up the Babylon.js environment and includes the necessary scripts.
- `script.js`: The JavaScript file containing the Babylon.js code to create the scene, objects, and handle user inputs.

## Features

- A 3D room with a floor size of 100x100 square feet.
- A movable, textured box controlled by the `w`, `a`, `s`, and `d` keys.
- A reset button to return the box to its initial position.
- Skybox for an immersive environment.
- Textured floor for added realism.

## Getting Started

### Prerequisites

To run this project, you need a modern web browser (e.g., Chrome, Firefox, Edge) with JavaScript enabled.

### Installation

1. Clone the repository or download the project files.

    ```bash
    git clone https://github.com/Harsh13d/Alecado-Assignment.git
    cd Alecado-Assignment
    ```

2. Ensure the following files are present in your project directory:
    - `index.html`
    - `script.js`

### Running the Project

1. Open the `index.html` file in a web browser:
    - Double-click the `index.html` file in your file explorer to open it in your default web browser.
    - Right-click the `index.html` file and select "Open with" and choose your preferred web browser.
    - Alternatively, open your web browser and drag and drop the `index.html` file into the browser window.

2. Once the page loads, you should see a 3D scene with a ground plane, a skybox, and a textured box.

3. Use the following keyboard controls to move the box:
    - `w`: Move the box forward (towards negative Z-axis).
    - `s`: Move the box backward (towards positive Z-axis).
    - `a`: Move the box left (towards negative X-axis).
    - `d`: Move the box right (towards positive X-axis).

4. Click the "Reset Box Position" button to return the box to its initial position.

## Customization

You can customize the scene by editing the `script.js` file. For example:
- Change the textures applied to the floor or the box.
- Add more objects to the scene.
- Modify the lighting or camera settings.

## Dependencies

- Babylon.js: A powerful, beautiful, simple, and open game and rendering engine. The library is included via a CDN in the `index.html` file.

## Acknowledgements

- [Babylon.js](https://www.babylonjs.com/) - The framework used to create this 3D scene.
