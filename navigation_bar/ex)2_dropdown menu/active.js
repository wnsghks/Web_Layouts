const container = document.querySelector(".container");
const arrow = document.querySelector(".arrow");


function decWidth() {
    const nextToggle = document.querySelector(".next_toggle");
    const previousToggle = document.querySelector(".previous_toggle");

    container.classList.toggle("action");
    nextToggle.classList.toggle("hidden");
    previousToggle.classList.toggle("hidden");
}

arrow.addEventListener("click", decWidth);

