// ===============================
// LOADER
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 3000);

});

// ===============================
// ELEMENTS
// ===============================

const hero = document.getElementById("hero");
const warning = document.getElementById("warning");
const birthday = document.getElementById("birthday");
const story = document.getElementById("story");
const gallery = document.getElementById("gallery");
const timeline = document.getElementById("timeline");

const beginBtn = document.getElementById("beginBtn");
const readyBtn = document.getElementById("readyBtn");
const storyBtn = document.getElementById("storyBtn");
const galleryBtn = document.getElementById("galleryBtn");
const timelineBtn = document.getElementById("timelineBtn");
const reportBtn = document.getElementById("reportBtn");

// ===============================
// HERO → WARNING
// ===============================

beginBtn.addEventListener("click", () => {

    hero.style.display = "none";
    warning.classList.remove("hidden");
    warning.style.display = "flex";

});

// ===============================
// WARNING → BIRTHDAY
// ===============================

readyBtn.addEventListener("click", () => {

    warning.style.display = "none";

    birthday.classList.remove("hidden");
    birthday.style.display = "flex";
    birthday.classList.add("page-show")

    const typing = document.getElementById("typing");

    typing.innerHTML = "";

    const text = "Today is your day. ❤️";

    let i = 0;

    const interval = setInterval(() => {

        typing.innerHTML += text.charAt(i);

        i++;

        if (i >= text.length) {
            clearInterval(interval);
        }

    }, 80);

});

// ===============================
// BIRTHDAY → STORY
// ===============================

storyBtn.addEventListener("click", () => {

    birthday.style.display = "none";

    story.classList.remove("hidden");
    story.style.display = "flex";
    story.classList.add("page-show")

});

// ===============================
// STORY → GALLERY
// ===============================

galleryBtn.addEventListener("click", () => {

    story.style.display = "none";

    gallery.classList.remove("hidden");
    gallery.style.display = "flex";
    gallery.classList.add("page-show")

});

// ===============================
// GALLERY
// ===============================

const images = [
    "assets/images/photo1.jpeg",
    "assets/images/photo2.jpeg",
    "assets/images/photo3.jpeg",
    "assets/images/photo4.jpeg",
    "assets/images/photo5.jpeg"
];

const captions = [
    "One of my favourite memories ❤️",
    "This day still makes me smile 😊",
    "You probably don't remember this 😂",
    "Some moments are priceless ✨",
    "Thank you for making memories with me ❤️"
];

let current = 0;

const galleryImage = document.getElementById("galleryImage");
const galleryCaption = document.getElementById("galleryCaption");
const photoCounter = document.getElementById("photoCounter");

function updateGallery(){

    galleryImage.src = images[current];
    galleryCaption.innerHTML = captions[current];

    if(photoCounter){
        photoCounter.innerHTML = (current+1) + " / " + images.length;
    }

    if(current === images.length-1){
        timelineBtn.classList.remove("hidden");
    }else{
        timelineBtn.classList.add("hidden");
    }

}

document.getElementById("nextBtn").addEventListener("click",()=>{

    if(current < images.length-1){
        current++;
    }

    updateGallery();

});

document.getElementById("prevBtn").addEventListener("click",()=>{

    if(current > 0){
        current--;
    }

    updateGallery();

});

// ===============================
// GALLERY → TIMELINE
// ===============================

timelineBtn.addEventListener("click",()=>{

    gallery.style.display="none";

    timeline.classList.remove("hidden");
    timeline.style.display="flex";
    timeline.classList.add("page-show")

});

// ===============================
// TIMELINE → AI REPORT
// ===============================

const report = document.getElementById("report");

reportBtn.addEventListener("click", () => {

    timeline.style.display = "none";

    report.classList.remove("hidden");
    report.style.display = "flex";
    report.classList.add("page-show")

});

// ===============================
// AI REPORT → INSIDE JOKES
// ===============================

const jokes = document.getElementById("jokes");
const jokesBtn = document.getElementById("jokesBtn");

jokesBtn.addEventListener("click", () => {

    report.style.display = "none";

    jokes.classList.remove("hidden");
    jokes.style.display = "flex";
    jokes.classList.add("page-show")

});

// ===============================
// INSIDE JOKES → LETTER
// ===============================

const letterBtn = document.getElementById("letterBtn");

letterBtn.addEventListener("click", () => {

    jokes.style.display = "none";

    letter.classList.remove("hidden");
    letter.style.display = "flex";
    letter.classList.add("page-show")

});

// ===============================
// LETTER
// ===============================

const letter = document.getElementById("letter");
const surpriseBtn = document.getElementById("surpriseBtn");
const letterText = document.getElementById("letterText");

const letterMessage = `Happy Birthday!

There are people we meet...

and there are people who quietly become one of our favourite memories.

Thank you for every laugh, every conversation, every moment.

I hope this year brings you happiness, success and everything you've wished for.

Stay exactly the way you are.

Happy Birthday once again. ❤️`;

letterBtn.addEventListener("click", () => {

    jokes.style.display = "none";

    letter.classList.remove("hidden");
    letter.style.display = "flex";
    letter.classList.add("page-show")

    letterText.innerHTML = "";

    let i = 0;

    const typing = setInterval(() => {

        letterText.innerHTML += letterMessage.charAt(i);

        i++;

        if (i >= letterMessage.length) {

            clearInterval(typing);

        }

    }, 35);

});

// ===============================
// LETTER → SURPRISE
// ===============================

const surprise = document.getElementById("surprise");
const openGift = document.getElementById("openGift");

surpriseBtn.addEventListener("click", () => {

    letter.style.display = "none";

    surprise.classList.remove("hidden");
    surprise.style.display = "flex";
    surprise.classList.add("page-show")

});

// ===============================
// FINAL ENDING
// ===============================

const ending = document.getElementById("ending");
const restartBtn = document.getElementById("restartBtn");
const finalLetterText = document.getElementById("finalLetterText");

const finalMessage = `Happy Birthday ❤️

I hope today brings you happiness, countless smiles, and beautiful memories.

Thank you for being such a wonderful part of my life.

No matter where life takes us,
I will always smile whenever I remember these moments.

Stay happy.
Stay blessed.
Keep shining.

Happy Birthday once again. 🎂❤️`;

function typeFinalLetter() {

    finalLetterText.innerHTML = "";

    let i = 0;

    const typing = setInterval(() => {

        finalLetterText.innerHTML += finalMessage.charAt(i);

        i++;

        if (i >= finalMessage.length) {

            clearInterval(typing);

        }

    }, 35);

}

openGift.addEventListener("click", () => {

    confetti({
        particleCount: 250,
        spread: 180,
        origin: { y: 0.6 }
    });

    setTimeout(() => {

        surprise.style.display = "none";

        ending.classList.remove("hidden");
        ending.style.display = "flex";
        ending.classList.add("page-show")

        typeFinalLetter();

    }, 1200);

});

restartBtn.addEventListener("click", () => {

    location.reload();

});

// ===============================
// BACKGROUND MUSIC
// ===============================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
music.volume = 0.35;

let isPlaying = false;
musicBtn.addEventListener("click", () => {
    if (!isPlaying) {
        music.play();
        musicBtn.innerHTML = "⏸ Pause Music";
        isPlaying = true;
    } else {
        music.pause();
        musicBtn.innerHTML = "🎵 Play Music";
        isPlaying = false;
    }

});

// ===============================
// FLOATING HEARTS
// ===============================

const heartsContainer = document.getElementById("hearts-container");
function createHeart(){
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random()*100 + "%";

    heart.style.animationDuration =
    (5 + Math.random()*5) + "s";

    heart.style.fontSize =
    (16 + Math.random()*20) + "px";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);

}

setInterval(createHeart,700);

// ===============================
// CURSOR GLOW
// ===============================

const glow = document.getElementById("cursorGlow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

// ===============================
// SCROLL PROGRESS
// ===============================

window.addEventListener("scroll",()=>{

const winScroll=document.documentElement.scrollTop;

const height=
document.documentElement.scrollHeight-
document.documentElement.clientHeight;

const scrolled=(winScroll/height)*100;

document.getElementById("progressBar").style.width=scrolled+"%";

});