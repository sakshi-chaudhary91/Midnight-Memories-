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
    const text = "Today isn't just your birthday. It's a celebration of you.❤️";
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
    "A picture that quietly became one of my favourite memories ❤️",
    "Every time I see this picture, it brings the same smile back 😊",
    "A random click ...a permanent memory 😂",
    "Some people don't realise they're becoming someone's favourite memory ❤️",
    "No matter where life takes us, I'll never forget these moments.❤️"
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
const letterMessage = ` To Someone Truly Special,❤️ Happy Birthday!!!
There is something I've always wanted to tell you.
Do you know who I am to you?
Probably not.
But if I had to answer, I would simply say this...
I'm one of your biggest well-wishers.
Someone who genuinely wants to see you happy, growing, and smiling every single day.
I don't know what kind of friends you have or how many people are there for you, but I hope you know this...
You have one true friend here who will never wish anything bad for you,ever.
No matter what happens, my prayers will always be for your happiness and success.
And if life ever feels difficult... If you ever feel like you have no one to talk to...
You can always talk to me.
Without hesitation. Without pretending to be okay. Without worrying about being judged.
Sometimes all we need is someone who simply listens.
I hope I can always be that person for you.
Thank you for being a part of so many beautiful memories.
Some moments may have looked ordinary, but today they have become memories I'll always cherish.
On your birthday, I just want to wish you endless happiness, good health, success, and a life filled with peace.
Never stop smiling. Never stop believing in yourself.
Because you truly deserve every good thing life has to offer.
Happy Birthday once again. 🎂❤️`;

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
const finalMessage = ` Before this little journey ends...
I just want you to remember one thing.
No matter where life takes us, I'll never forget these moments.
Time may change many things...
People may get busy...
Life may take us in different directions...
But some memories are simply too beautiful to fade.
Thank you for every smile, every laugh, every conversation, and every little moment that quietly became unforgettable.
I truly hope this birthday brings you everything your heart wishes for.
Keep smiling.
Keep shining.
Take care of yourself.
And whenever you look back at these memories...
I hope they bring a smile to your face, just as they always will to mine.
Happy Birthday. ❤️✨
Until we create new memories... 🌙`;

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