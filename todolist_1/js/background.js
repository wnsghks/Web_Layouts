const images = ["1.jpg", "2.jpg", "3.jpg"];
const todaysImages = (images[Math.floor(Math.random() * images.length)]);

const bgImage = document.createElement("img");

bgImage.src = `img/${todaysImages}`;

console.log(bgImage);

document.body.appendChild(bgImage);
// document.body.prepend(bgImage); body의 가장 맨앞에 오도록 한디.

