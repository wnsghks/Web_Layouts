const bg = document.querySelector("#container");
const count = 20;

for (let i = 0; i < count; i++){
    let glitchBox = document.createElement("div");
    glitchBox.className = "box";
    bg.appendChild(glitchBox);
}

let glitch = document.getElementsByClassName("box");
for (let i = 0; i < glitch.length; i++){
    glitch[i].style.left = Math.floor(Math.random() * 100) + "vw";
    glitch[i].style.top = Math.floor(Math.random() * 100) + "vh";
    glitch[i].style.width = Math.floor(Math.random() * 100) + "px";
    glitch[i].style.height = Math.floor(Math.random() * 10) + "px";
    glitch[i].style.backgroundPosition = Math.floor(Math.random() * 5) + "px";
}
// 각 너비와 높이의 최대값을 정하고 랜덤으로 뽑아 배경이 움직이는 효과를 주기위해
//backgroundPosition 값을 랜덤으로 주어 배경이 뒤죽박죽 옮겨지도록 설정