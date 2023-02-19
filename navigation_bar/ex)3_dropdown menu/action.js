const icon = document.querySelector(".card ion-icon");


function addHeight() {
    const card = document.querySelector(".card");

    card.classList.toggle("action");
}

icon.addEventListener("click", addHeight);