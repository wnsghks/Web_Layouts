const clock = document.querySelector("#clock");

function getClock() {
    clock.innerText = (new Date().toLocaleTimeString('en-us'));
}

getClock();
setInterval(getClock, 1000);

