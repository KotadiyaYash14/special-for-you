const messages = [
    ""
];

let index = 0;

function changeMessage() {
    document.getElementById("message").innerText =
        messages[index];

    index++;

    if(index >= messages.length){
        index = 0;
    }
}

changeMessage();
setInterval(changeMessage, 3000);

function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "";

    heart.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 400);