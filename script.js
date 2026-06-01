// -----------------------------
// DAYS COUNTER
// -----------------------------

function calculateDays() {

    const startDate = new Date("2024-08-15");
    const today = new Date();

    const diff = today - startDate;

    const days = Math.floor(
        diff / (1000 * 60 * 60 * 24)
    );

    const counter =
        document.getElementById("daysCounter");

    if(counter){

        counter.innerHTML =
        `❤️ ${days} beautiful days since 15 Aug 2024 ❤️`;
    }
}

calculateDays();

// -----------------------------
// PAGE NAVIGATION
// -----------------------------

function nextPage(pageId){

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");
        });

    const target =
        document.getElementById(pageId);

    target.classList.add("active");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

    if(pageId === "balloons"){

        createBalloons();
    }

    if(pageId === "letter"){

        startLetter();
    }
}

// -----------------------------
// MUSIC
// -----------------------------

function toggleMusic(){

    const music =
        document.getElementById("bgMusic");

    if(music.paused){

        music.play();

    }else{

        music.pause();
    }
}

// -----------------------------
// TEDDY MESSAGE
// -----------------------------

function showTeddyMessage(){

    const teddyText =
        document.getElementById("teddyMessage");

    teddyText.innerHTML =

    `
    ❤️ N ❤️ <br><br>

    You make every day brighter. <br>
    Your smile is my favorite view. <br>
    Thank you for being part of my life. <br>
    Every memory with you is special. <br>
    I will always cherish you. ❤️
    `;
}

// -----------------------------
// BALLOON GAME
// -----------------------------

let balloonsCreated = false;

function createBalloons(){

    if(balloonsCreated) return;

    balloonsCreated = true;

    const area =
        document.getElementById("balloonArea");

    const messages = [

        "❤️ You make every day brighter",

        "🌹 Your smile is my favorite view",

        "💕 Thank you for being part of my life",

        "✨ Every memory with you is special",

        "💖 I will always cherish you",

        "🥰 You are truly special",

        "❤️ You make my world better",

        "🌸 Every moment matters"
    ];

    messages.forEach(message => {

        const balloon =
            document.createElement("div");

        balloon.className =
            "pop-balloon";

        balloon.innerHTML = "🎈";

        balloon.onclick = () => {

            balloon.innerHTML = "💥";

            balloon.style.pointerEvents =
                "none";

            setTimeout(() => {

                alert(message);

            },200);
        };

        area.appendChild(balloon);
    });
}

// -----------------------------
// GIFT BOX
// -----------------------------

function openGift(){

    const gift =
        document.querySelector(".gift-box");

    gift.innerHTML = "🍫";

    document.getElementById(
        "giftMessage"
    ).innerHTML =

    `
    🍫 Life is sweeter with you ❤️
    <br><br>
    Thank you for every smile,
    every memory,
    and every beautiful moment.
    `;
}

// -----------------------------
// CANDLES
// -----------------------------

let candleCount = 0;

function lightCandle(el){

    if(el.classList.contains("lit")){

        return;
    }

    el.classList.add("lit");

    candleCount++;

    if(candleCount === 4){

        setTimeout(() => {

            alert(
                "✨ All candles are glowing, just like your smile ❤️"
            );

        },500);
    }
}

// -----------------------------
// LOVE LETTER
// -----------------------------

let letterStarted = false;

function startLetter(){

    if(letterStarted){

        return;
    }

    letterStarted = true;

    const text =

`Dear N ❤️

You make every day brighter.

Your smile is my favorite view.

Thank you for being part of my life.

Every memory with you is special.

I will always cherish you.

Every day since 15 Aug 2024 has become more meaningful.

Thank you for every laugh,
every smile,
and every beautiful memory.

Forever Yours ❤️`;

    const box =
        document.getElementById(
            "letterText"
        );

    let i = 0;

    const typing = setInterval(() => {

        box.innerHTML += text.charAt(i);

        i++;

        if(i >= text.length){

            clearInterval(typing);
        }

    },35);
}

// -----------------------------
// FLOATING HEARTS
// -----------------------------

function createHeart(){

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (20 + Math.random() * 25)
        + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    },8000);
}

setInterval(createHeart, 350);

// -----------------------------
// FINAL HEART EXPLOSION
// -----------------------------

function heartExplosion(){

    const finalText =
        document.getElementById(
            "finalMessage"
        );

    finalText.innerHTML =

    `
    ❤️ N ❤️ <br><br>

    You make every day brighter.<br>
    Your smile is my favorite view.<br>
    Thank you for being part of my life.<br>
    Every memory with you is special.<br>
    I will always cherish you.<br><br>

    Forever Yours ❤️
    `;

    for(let i=0;i<120;i++){

        const confetti =
            document.createElement("div");

        confetti.className =
            "confetti";

        const items = [
            "❤️",
            "💕",
            "💖",
            "🎉",
            "✨",
            "🌹"
        ];

        confetti.innerHTML =
            items[
                Math.floor(
                    Math.random() *
                    items.length
                )
            ];

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.fontSize =
            (20 + Math.random()*20)
            + "px";

        document.body.appendChild(
            confetti
        );

        setTimeout(() => {

            confetti.remove();

        },4000);
    }
}