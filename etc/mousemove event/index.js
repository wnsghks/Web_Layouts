const slide = document.querySelector(".slide2 ");

function moveSlide(e){
    const valueX = e.clientX;
    slide.style.left = valueX + "px";
    console.log(valueX);
}

window.addEventListener("mousemove", moveSlide);

//현재 기능은 드래그드롭개념이 아니라 그냥 움직일때마다 무조건 화면이 전환된다.