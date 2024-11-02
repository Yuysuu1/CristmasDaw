function revealMessage() {
    const message = document.getElementById('message');
    const yesButton = document.querySelector('button:nth-of-type(1)');
    const noButton = document.querySelector('button:nth-of-type(2)');

    message.textContent = "";
    yesButton.style.display = "none";
    noButton.style.display = "none";
}

function moveButton() {
    const noButton = document.querySelector('button:nth-of-type(2)');
    const card = document.getElementById('card');

    const cardRect = card.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    const margin = 50; 
    const moveDistance = 200; 
    let randomX, randomY;

    do {
        randomX = (Math.random() - 0.5) * moveDistance;
        randomY = (Math.random() - 0.5) * moveDistance;
    } while (
        buttonRect.left + randomX < cardRect.left + margin ||
        buttonRect.right + randomX > cardRect.right - margin ||
        buttonRect.top + randomY < cardRect.top + margin ||
        buttonRect.bottom + randomY > cardRect.bottom - margin
    );

    noButton.style.transition = "transform 0.5s";
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

const images = [
    "/ImageTo/cry1.gif",
    "/ImageTo/cry2.gif",
    "/ImageTo/cry3.gif",
    "/ImageTo/cry4.gif",
    "/ImageTo/cry5.gif"
];

const messages = [
    "Why no ☹️",
    "iyak nalang ako boss? 🥹",
    "ayaw mo tapon ko to sige🥹",
    "Boss payag kana payag na ako 🥺",
    "Please☹️?"
];

let currentImageIndex = 0;

function revealMessage() {
    const message = document.getElementById('message');
    const yesButton = document.querySelector('button:nth-of-type(1)');
    const noButton = document.querySelector('button:nth-of-type(2)');
    const image = document.getElementById('please-image');

    message.textContent = "Thank you po 🫶";
    image.src = "/ImageTo/Yey.gif";
    image.alt = "Yey!";
    yesButton.style.display = "none";
    noButton.style.display = "none";
}

function changeImageAndText() {
    const image = document.getElementById('please-image');
    const message = document.getElementById('message');
    const noButton = document.querySelector('button:nth-of-type(2)');

    currentImageIndex = (currentImageIndex + 1) % images.length;
    image.src = images[currentImageIndex];
    image.alt = `cry${currentImageIndex + 1}-gif`;

    const randomMessageIndex = Math.floor(Math.random() * messages.length);
    message.textContent = messages[randomMessageIndex];

    moveButton(noButton);
}

function moveButton(noButton) {
    const card = document.getElementById('card');
    const cardRect = card.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    const margin = 50; 
    const moveDistance = 200; 
    let randomX, randomY;

    do {
        randomX = (Math.random() - 0.5) * moveDistance;
        randomY = (Math.random() - 0.5) * moveDistance;
    } while (
        buttonRect.left + randomX < cardRect.left + margin ||
        buttonRect.right + randomX > cardRect.right - margin ||
        buttonRect.top + randomY < cardRect.top + margin ||
        buttonRect.bottom + randomY > cardRect.bottom - margin
    );

    noButton.style.transition = "transform 0.5s";
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}