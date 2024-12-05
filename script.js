let isBagStored = false;
let remainingSpace = 100; // Assuming initial capacity as 100%
let batteryLevel = 100; // Assuming battery starts at 100%

function moveDrone(direction) {
    alert(`Drone is moving ${direction}`);
    if (direction === "DOWN") {
        // Enable the "Open Robotic Arm" button when DOWN is pressed
        document.getElementById("armOpenBtn").disabled = false;
    }
    // Update the drone position on the map
    updateDronePosition(direction);
}

function stopDrone() {
    alert("Drone has stopped.");
}

function openRoboticArm() {
    if (remainingSpace > 0) {
        // Simulate picking up plastic and storing it in the mesh bag
        remainingSpace -= 10; // Decrease space by 10% for this example
        isBagStored = true;

        // Update mesh bag status and remaining space
        updateMeshBagStatus();
    } else {
        alert("Mesh bag is full. Please empty it before collecting more plastic.");
    }
}

function updateMeshBagStatus() {
    const statusMessage = document.getElementById("statusMessage");
    const spaceElement = document.getElementById("space");

    // Update message based on storage status
    if (isBagStored) {
        statusMessage.textContent = "Plastic stored in mesh bag";
        alert("Plastic stored in mesh bag.");

        // Reduce battery level if remaining space reaches 90%
        if (remainingSpace === 90) {
            batteryLevel = 97; // Reduce battery to 97%
            alert("Battery level reduced to 97% due to mesh bag status.");
            const batteryLevelElement = document.getElementById("batteryLevel");
            batteryLevelElement.textContent = `${batteryLevel}%`;
        }
    } else {
        statusMessage.textContent = "Plastic not stored in mesh bag";
        alert("Plastic not stored in mesh bag.");
    }

    // Update remaining space display
    spaceElement.textContent = `${remainingSpace}%`;

    // Reset the button state for robotic arm
    document.getElementById("armOpenBtn").disabled = true;
    isBagStored = false; // Reset storage status for the next operation
}

function detectPlastic() {
    alert("Plastic detected!"); // Placeholder for detection logic

    // Optionally, you can show the prototype video if plastic is detected
    const prototypeVideo = document.getElementById("prototypeVideo");
    prototypeVideo.style.display = "block"; // Show the video
    prototypeVideo.play(); // Play the video
}

function navigateDrone() {
    alert("Finding the location of the drone...");
    const navigationVideo = document.getElementById("navigationVideo");
    navigationVideo.style.display = "block"; // Show the video
    navigationVideo.play(); // Play the video
}

function updateDronePosition(direction) {
    // For the sake of demonstration, we'll just update the position with a static string.
    const newPosition = `Lat: ${Math.random().toFixed(4)}, Lng: ${Math.random().toFixed(4)}`;
    document.getElementById("currentPosition").textContent = newPosition;
}

function checkBatteryStatus() {
    alert(`Battery level is at ${batteryLevel}%.`);
    const batteryLevelElement = document.getElementById("batteryLevel");
    batteryLevelElement.textContent = `${batteryLevel}%`;
}

function detectObstacle() {
    // Simulate obstacle detection logic
    const obstacleDetected = Math.random() < 0.5; // Randomly detect obstacle (50% chance)

    if (obstacleDetected) {
        alert("Obstacle detected! Drone will halt.");
        stopDrone();
    } else {
        alert("No obstacles detected.");
    }
}
