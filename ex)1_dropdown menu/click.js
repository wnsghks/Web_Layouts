const menuToggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".navigation");

function changeForm() {
    menuToggle.classList.toggle("action");
    navigation.classList.toggle("action");
}

menuToggle.addEventListener("click", changeForm);