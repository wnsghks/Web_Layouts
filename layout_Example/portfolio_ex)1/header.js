function background() {
    const header = document.querySelector("header");
    const valueY = window.scrollY;
    
    if(valueY === 0) {
        header.classList.remove("sticky");
    } else {
        header.classList.add("sticky");
    }
}

window.addEventListener("scroll", background);

// window.addEventListener("scroll", function() {
//     const header = document.querySelector("header");

//     header.classList.toggle("sticky", window.scrollY > 0);
// });