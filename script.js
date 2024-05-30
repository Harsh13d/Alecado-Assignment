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

    // Create a room (floor)
    const roomSize = 100;
    const floor = BABYLON.MeshBuilder.CreateGround("floor", {width: roomSize, height: roomSize}, scene);

    // Add a box to the scene
    const box = BABYLON.MeshBuilder.CreateBox("box", {size: 5}, scene);
    box.position.y = 2.5;

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
