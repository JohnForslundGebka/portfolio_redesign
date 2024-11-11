// Add event listeners to each button to handle mouse enter and leave events
document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("mouseenter", () => expandButton(button.id));
    button.addEventListener("mouseleave", () => resetButton(button));
});


//add the expanded-button css formating on hoover
function expandButton(buttonId) {
    const button = document.getElementById(`button-${buttonId}`);
    button.classList.add("expanded-button");
}

function resetButton(button) {
    button.classList.remove("expanded-button");
}


document.addEventListener("DOMContentLoaded", function() {
    // Get the "Projects" button
    const projectsButton = document.getElementById("button-projects");

    // Add a click event listener to navigate to projects.html
    projectsButton.addEventListener("click", function() {
        window.location.href = "projects.html";
    });
});