const messages = [
    "From the moment you came into my life, everything became more beautiful ❤️",

    "Your smile is my favorite view in the whole world ✨",

    "You are the reason my heart feels so alive 💖",

    "Every day with you feels like a dream 🌹",

    "I don't need perfect moments, I just need you ❤️",

    "Thank you for being the most beautiful chapter of my life 💕"
];

function showLoveMessage() {

    const messageBox =
        document.getElementById("message");

    const randomMessage =
        messages[
            Math.floor(
                Math.random() * messages.length
            )
        ];

    messageBox.innerHTML = "";

    let i = 0;

    const typing =
        setInterval(() => {

            messageBox.innerHTML +=
                randomMessage.charAt(i);

            i++;

            if (i >= randomMessage.length) {
                clearInterval(typing);
            }

        }, 40);
}

function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 20 + 20 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 300);

function createBalloon() {

    const balloon =
        document.createElement("div");

    balloon.classList.add("balloon");

    const balloons =
        ["🎈", "💖", "💕"];

    balloon.innerHTML =
        balloons[
            Math.floor(
                Math.random() * balloons.length
            )
        ];

    balloon.style.left =
        Math.random() * 100 + "vw";

    document.body.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 12000);
}

setInterval(createBalloon, 2000);