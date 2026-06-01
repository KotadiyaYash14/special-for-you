// ============================================
// LOVE SITE — REDESIGNED SCRIPT
// ============================================

// ============================
// PAGE NAVIGATION
// ============================

let currentPage = 0;
const totalPages = 8;
let pageInited = {};

function goToPage(index) {
    if (index < 0 || index >= totalPages) return;

    const pages = document.querySelectorAll('.page');
    const dots  = document.querySelectorAll('.dot');

    // Animate out current
    const current = document.querySelector('.page.active');
    if (current) {
        current.classList.add('exit-up');
        setTimeout(() => current.classList.remove('exit-up'), 600);
        current.classList.remove('active');
    }

    currentPage = index;

    // Animate in new
    const target = document.getElementById('page-' + index);
    if (target) {
        target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Update dots
    dots.forEach((d, i) => d.classList.toggle('active', i === index));

    // Init page-specific logic once
    if (!pageInited[index]) {
        pageInited[index] = true;
        if (index === 2) createBalloons();
        if (index === 5) startLetter();
    }
}

// ============================
// DAYS COUNTER
// ============================

function calculateDays() {
    const start = new Date("2024-08-15");
    const today = new Date();
    const diff  = Math.floor((today - start) / (1000 * 60 * 60 * 24));
    const el    = document.getElementById("daysNumber");
    if (el) {
        // Animate count-up
        let count = 0;
        const step = Math.ceil(diff / 60);
        const t = setInterval(() => {
            count = Math.min(count + step, diff);
            el.textContent = count.toLocaleString();
            if (count >= diff) clearInterval(t);
        }, 25);
    }
}

calculateDays();

// ============================
// MUSIC
// ============================

let musicPlaying = false;

function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const btn   = document.getElementById('musicBtn');
    const icon  = document.getElementById('musicIcon');
    if (music.paused) {
        music.play().catch(() => {});
        musicPlaying = true;
        btn.classList.add('playing');
        icon.textContent = '🎶';
    } else {
        music.pause();
        musicPlaying = false;
        btn.classList.remove('playing');
        icon.textContent = '🎵';
    }
}

// ============================
// FLOATING HEARTS (ambient)
// ============================

function spawnHeart() {
    const h = document.createElement('div');
    h.className = 'heart';
    const items = ['❤️','💕','💖','🌹','✨','💗'];
    h.textContent = items[Math.floor(Math.random() * items.length)];
    h.style.left = (Math.random() * 100) + 'vw';
    h.style.fontSize = (14 + Math.random() * 18) + 'px';
    const dur = 7 + Math.random() * 5;
    h.style.animation = `rise ${dur}s linear forwards`;
    document.body.appendChild(h);
    setTimeout(() => h.remove(), dur * 1000);
}

setInterval(spawnHeart, 500);

// ============================
// FLOATING PETALS (ambient)
// ============================

function spawnPetal() {
    const p = document.createElement('div');
    p.className = 'petal';
    const petals = ['🌸','🌺','🌹','🌷','💮'];
    p.textContent = petals[Math.floor(Math.random() * petals.length)];
    p.style.left = (Math.random() * 100) + 'vw';
    const dur = 8 + Math.random() * 6;
    p.style.animation = `petalFall ${dur}s linear forwards`;
    p.style.fontSize  = (10 + Math.random() * 14) + 'px';
    document.body.appendChild(p);
    setTimeout(() => p.remove(), dur * 1000);
}

setInterval(spawnPetal, 1200);

// ============================
// TEDDY MESSAGE
// ============================

let teddySaid = false;

function showTeddyMessage() {
    if (teddySaid) return;
    teddySaid = true;

    const lines = [
        "❤️ N ❤️",
        "",
        "You make every day brighter.",
        "Your smile is my favourite view.",
        "Thank you for being part of my life.",
        "Every memory with you is precious.",
        "I will always, always cherish you."
    ];

    const el = document.getElementById('teddyMessage');
    const text = lines.join('\n');
    let i = 0;

    const t = setInterval(() => {
        el.innerHTML = text.slice(0, i).replace(/\n/g, '<br>');
        i++;
        if (i > text.length) clearInterval(t);
    }, 40);
}

// ============================
// BALLOON GAME
// ============================

const balloonMessages = [
    { emoji: "❤️", text: "You make every single day brighter just by being you." },
    { emoji: "🌹", text: "Your smile is honestly my most favourite thing in this world." },
    { emoji: "💕", text: "Thank you for being such a special part of my life." },
    { emoji: "✨", text: "Every memory we have made together is truly priceless." },
    { emoji: "💖", text: "I will always, always cherish every moment with you." },
    { emoji: "🥰", text: "You are the most special person in my entire universe." },
    { emoji: "❤️", text: "You make my world so much better just by existing in it." },
    { emoji: "🌸", text: "Every single moment I spend with you truly matters." }
];

function createBalloons() {
    const area = document.getElementById('balloonArea');
    area.innerHTML = '';

    const balloonEmojis = ['🎈','🎈','🎈','🎈','🎈','🎈','🎈','🎈'];
    const colors = ['#FF6B9D','#FF4D8D','#E8748A','#C0395A','#FF8FA3','#D63862','#FF6B9D','#E8748A'];

    balloonMessages.forEach((msg, index) => {
        const b = document.createElement('div');
        b.className = 'pop-balloon';
        b.innerHTML = '🎈';
        b.style.filter = `hue-rotate(${index * 30}deg) drop-shadow(0 8px 16px rgba(192,57,90,0.4))`;

        b.onclick = () => {
            b.classList.add('popped');
            setTimeout(() => {
                b.style.display = 'none';
                showPopup(msg.emoji, msg.text);
            }, 280);
        };

        area.appendChild(b);
    });
}

// ============================
// CUSTOM POPUP
// ============================

function showPopup(emoji, text) {
    document.getElementById('popupEmoji').textContent = emoji;
    document.getElementById('popupText').textContent = text;
    document.getElementById('popupOverlay').classList.add('open');
}

function closePopup() {
    document.getElementById('popupOverlay').classList.remove('open');
}

// ============================
// GIFT BOX
// ============================

let giftOpened = false;

function openGift() {
    if (giftOpened) return;
    giftOpened = true;

    const box = document.getElementById('giftBox');
    const emoji = box.querySelector('.gift-emoji');

    emoji.style.transform = 'scale(1.3) rotate(10deg)';
    setTimeout(() => {
        emoji.textContent = '🍫';
        emoji.style.transform = 'scale(1)';

        document.getElementById('giftMessage').innerHTML =
            `🍫 <em>Life is sweeter with you</em> ❤️<br><br>
            Thank you for every smile,<br>
            every laugh,<br>
            and every beautiful moment we have shared.`;
    }, 350);
}

// ============================
// CANDLES
// ============================

let litCount = 0;
const totalCandles = 5;

function lightCandle(el) {
    if (el.classList.contains('lit')) return;
    el.classList.add('lit');
    litCount++;

    if (litCount === totalCandles) {
        const msg = document.getElementById('candleMsg');
        msg.innerHTML = '✨ All candles glow, just like your smile ❤️';
    }
}

// ============================
// LOVE LETTER
// ============================

let letterStarted = false;

function startLetter() {
    if (letterStarted) return;
    letterStarted = true;

    const letterContent =
`Dear N ❤️

You make every day brighter.

Your smile is my favourite view in the whole world.

Thank you for being such a beautiful part of my life.

Every memory with you is something I treasure deeply.

I will always, always cherish you.

Every day since 15 Aug 2024 has been more meaningful
because of you.

Thank you for every laugh,
every smile,
and every precious moment.

You are my favourite person.

Forever Yours ❤️`;

    const box = document.getElementById('letterText');
    let i = 0;

    const t = setInterval(() => {
        box.textContent = letterContent.slice(0, i);
        i++;
        if (i > letterContent.length) clearInterval(t);
    }, 30);
}

// ============================
// FINAL HEART EXPLOSION
// ============================

let exploded = false;

function heartExplosion() {
    // Reveal message
    const msg = document.getElementById('finalMessage');
    msg.classList.remove('hidden');
    msg.innerHTML =
        `❤️ N ❤️<br><br>
        You make every day brighter.<br>
        Your smile is my favourite view.<br>
        Thank you for being part of my life.<br>
        Every memory with you is special.<br>
        I will always cherish you.<br><br>
        <strong style="color:var(--gold)">Forever Yours ❤️</strong>`;

    // Confetti burst
    const items = ['❤️','💕','💖','🎉','✨','🌹','🌸','💗'];
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const c = document.createElement('div');
            c.className = 'confetti';
            c.textContent = items[Math.floor(Math.random() * items.length)];
            c.style.left = (Math.random() * 100) + 'vw';
            c.style.fontSize = (16 + Math.random() * 20) + 'px';
            const dur = 2.5 + Math.random() * 2.5;
            c.style.animation = `confettiFall ${dur}s linear forwards`;
            document.body.appendChild(c);
            setTimeout(() => c.remove(), dur * 1000);
        }, i * 30);
    }
}

// ============================
// KEYBOARD NAVIGATION
// ============================

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goToPage(currentPage + 1);
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   goToPage(currentPage - 1);
});

// ============================
// SWIPE NAVIGATION (mobile)
// ============================

let touchStartX = 0, touchStartY = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 40 && Math.abs(dy) < 60) return; // too small
    if (Math.abs(dy) > Math.abs(dx)) {
        // vertical swipe
        if (dy < -50) goToPage(currentPage + 1); // swipe up → next
        if (dy > 50)  goToPage(currentPage - 1); // swipe down → prev
    }
});
