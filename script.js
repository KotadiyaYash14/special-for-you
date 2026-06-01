function nextPage(pageId){

    document
        .querySelectorAll(".page")
        .forEach(p=>p.classList.remove("active"));

    document
        .getElementById(pageId)
        .classList.add("active");

    if(pageId==="letter"){
        startLetter();
    }

    if(pageId==="balloon"){
        createBalloons();
    }
}

function showTeddyMessage(){

    document.getElementById("teddyMessage").innerHTML=
        "❤️ N, you make every day brighter and every moment more beautiful ❤️";
}

function createBalloons(){

    const area=document.getElementById("balloonArea");

    if(area.children.length>0) return;

    const msgs=[
        "❤️ You make every day brighter",
        "🌹 Your smile is my favorite view",
        "💕 Thank you for being part of my life",
        "✨ Every memory with you is special",
        "💖 I will always cherish you"
    ];

    msgs.forEach(msg=>{

        const balloon=document.createElement("div");

        balloon.className="pop-balloon";

        balloon.innerHTML="🎈";

        balloon.onclick=()=>{

            balloon.innerHTML="💥";

            alert(msg);
        };

        area.appendChild(balloon);
    });
}

function openChocolate(){

    document.getElementById("chocoMessage")
        .innerHTML=
        "🍫 Life is sweeter with you Priya ❤️";
}

let candleCount=0;

function lightCandle(el){

    if(el.classList.contains("lit")) return;

    el.classList.add("lit");

    candleCount++;

    if(candleCount===4){

        setTimeout(()=>{

            alert(
                "✨ All candles are glowing just like your smile ❤️"
            );

        },300);
    }
}

function startLetter(){

    const text=
`
Dear N ❤️

You make every day brighter.

Your smile is my favorite view.

Thank you for being part of my life.

Every memory with you is special.

I will always cherish you.

Forever Yours ❤️
`;

    const box=document.getElementById("letterText");

    if(box.innerHTML!=="") return;

    let i=0;

    const type=setInterval(()=>{

        box.innerHTML+=text.charAt(i);

        i++;

        if(i>=text.length){

            clearInterval(type);
        }

    },35);
}

function heartExplosion(){

    for(let i=0;i<100;i++){

        const confetti=
            document.createElement("div");

        confetti.className="confetti";

        confetti.innerHTML=
            ["❤️","💕","💖","🎉"][Math.floor(Math.random()*4)];

        confetti.style.left=
            Math.random()*100+"vw";

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },4000);
    }

    alert(
        "❤️ N ❤️\n\nThank you for being part of my life.\nYou are truly special to me."
    );
}