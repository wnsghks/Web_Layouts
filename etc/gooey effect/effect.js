const container = document.getElementById("container");
const count = 40;

for (let i = 0; i < 40; i++){
    const gooeyBox = document.createElement("div")
    gooeyBox.className = "box";
    container.appendChild(gooeyBox);
}

setInterval(function(){
    const gooey = document.getElementsByClassName("box");
    for (let i = 0; i < gooey.length; i++){
        gooey[i].style.left = Math.floor(Math.random()*90) + "vw";
        gooey[i].style.top = Math.floor(Math.random()*80) + "vh";
    }
}, 2000)
    

