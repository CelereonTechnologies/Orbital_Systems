// ========================================
// BLACK FYR3 SYSTEMS
// INFRASTRUCTURE SCRIPT LAYER
// ========================================

// TERMINAL TYPING EFFECT

const terminalLines = [

"> Booting BLACK FYR3 infrastructure...",
"> Initializing AI systems...",
"> Connecting automation pipelines...",
"> Deployment network online...",
"> Analytics systems synchronized...",
"> Infrastructure runtime: ACTIVE",
"> BLACK FYR3 SYSTEMS READY"

];

const terminalBody = document.querySelector(".terminal-body");

if (terminalBody) {

terminalBody.innerHTML = "";

let lineIndex = 0;

function typeLine() {

if (lineIndex >= terminalLines.length) return;

const line = document.createElement("p");

terminalBody.appendChild(line);

let charIndex = 0;

const typing = setInterval(() => {

line.textContent += terminalLines[lineIndex][charIndex];

charIndex++;

if (charIndex >= terminalLines[lineIndex].length) {

clearInterval(typing);

lineIndex++;

setTimeout(typeLine, 500);

}

}, 25);

}

typeLine();

}

// ========================================
// COUNTER ANIMATIONS
// ========================================

const counters = document.querySelectorAll(".metric-card h2");

counters.forEach(counter => {

const targetText = counter.innerText;

const target = parseInt(targetText);

if (isNaN(target)) return;

let count = 0;

const speed = target / 80;

function updateCounter() {

count += speed;

if (count < target) {

counter.innerText = Math.floor(count);

requestAnimationFrame(updateCounter);

} else {

counter.innerText = targetText;

}

}

updateCounter();

});

// ========================================
// SCROLL REVEALS
// ========================================

const revealElements = document.querySelectorAll(

".division-card, .agent-card, .metric-card, .status-box, .flow-box, .mission-card"

);

function revealOnScroll() {

const triggerBottom = window.innerHeight * 0.88;

revealElements.forEach(el => {

const top = el.getBoundingClientRect().top;

if (top < triggerBottom) {

el.classList.add("reveal-active");

}

});

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ========================================
// CUSTOM CURSOR
// ========================================

const cursor = document.createElement("div");

cursor.classList.add("custom-cursor");

document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {

cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

});

// ========================================
// PARALLAX EFFECT
// ========================================

window.addEventListener("scroll", () => {

const scrollY = window.scrollY;

document.body.style.backgroundPositionY = scrollY * 0.2 + "px";

});

// ========================================
// FLOATING EMBERS
// ========================================

function createEmber() {

const ember = document.createElement("div");

ember.classList.add("dynamic-ember");

document.body.appendChild(ember);

ember.style.left =
Math.random() * window.innerWidth + "px";

ember.style.animationDuration =
Math.random() * 4 + 4 + "s";

ember.style.opacity = Math.random();

setTimeout(() => {

ember.remove();

}, 8000);

}

setInterval(createEmber, 500);

// ========================================
// LIVE STATUS PULSE
// ========================================

const statusBoxes =
document.querySelectorAll(".status-box span");

setInterval(() => {

statusBoxes.forEach(status => {

status.style.opacity = "0.5";

setTimeout(() => {

status.style.opacity = "1";

}, 300);

});

}, 2000);
