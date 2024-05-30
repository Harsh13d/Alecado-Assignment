// Get the canvas element
const canvas = document.getElementById('renderCanvas');

// Generate the Babylon.js 3D engine
const engine = new BABYLON.Engine(canvas, true);

// Create the scene
const createScene = function() {
    const scene = new BABYLON.Scene(engine);

    // Add a camera to the scene and attach it to the canvas
    const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 2.5, 150, new BABYLON.Vector3(0, 0, 0), scene);
    camera.attachControl(canvas, true);

    // Add lights to the scene
    const light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
    const light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 50, 0), scene);

    // Create a room (floor)
    const roomSizeInFeet = 100; // Room size in square feet
    const floor = BABYLON.MeshBuilder.CreateGround("floor", {width: roomSizeInFeet, height: roomSizeInFeet}, scene);

    // Apply a texture to the floor
    const floorMaterial = new BABYLON.StandardMaterial("floorMaterial", scene);
    floorMaterial.diffuseTexture = new BABYLON.Texture("https://www.babylonjs-playground.com/textures/floor.png", scene);
    floor.material = floorMaterial;

    // Add a box to the scene
    const box = BABYLON.MeshBuilder.CreateBox("box", {size: 5}, scene);
    box.position.y = 2.5; // Position the box above the ground

    // Apply a texture material to the box
    const boxMaterial = new BABYLON.StandardMaterial("boxMaterial", scene);
    boxMaterial.diffuseTexture = new BABYLON.Texture("https://www.babylonjs-playground.com/textures/crate.png", scene);
    box.material = boxMaterial;

    // Add a skybox
    const skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size: 500}, scene);
    const skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("https://playground.babylonjs.com/textures/skybox", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skybox.material = skyboxMaterial;

    // Add keyboard controls to move the box
    scene.onKeyboardObservable.add((kbInfo) => {
        switch (kbInfo.type) {
            case BABYLON.KeyboardEventTypes.KEYDOWN:
                switch (kbInfo.event.key) {
                    case "w":
                        box.position.z -= 1;
                        break;
                    case "s":
                        box.position.z += 1;
                        break;
                    case "a":
                        box.position.x -= 1;
                        break;
                    case "d":
                        box.position.x += 1;
                        break;
                }
                break;
        }
    });

    // Reset button to move the box back to the center
    document.getElementById("resetButton").addEventListener("click", () => {
        box.position = new BABYLON.Vector3(0, 2.5, 0);
    });

    return scene;
};

// Call the createScene function
const scene = createScene();

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
    scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
    engine.resize();
});
