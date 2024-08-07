/* getting the containers */
const welcomeContainer = document.getElementById('welcomeContainer');
const nameContainer = document.getElementById('nameContainer');
const gameContainer = document.getElementById('gameContainer');

/* getting the buttons */
const welcomeButton = document.getElementById('welcomeButton');
const nameButton = document.getElementById('nameButton');

/* getting the error and username */
const nameError = document.getElementById('nameError');
const nameInput = document.getElementById('name');

/* declaring the var to store username */
let name;

welcomeButton.addEventListener('click', function () {
    welcomeContainer.classList.add('hide');
    nameContainer.classList.remove('hide');
});

nameButton.addEventListener('click', function () {
    nameError.classList.add('hide');

    if (nameInput.value != '') {
        nameContainer.classList.add('hide');
        gameContainer.classList.remove('hide');
    } else {
        nameError.classList.remove('hide');
    }
})


/* game function */
document.getElementById('askButton').addEventListener('click', function () {
    const questionInput = document.getElementById('question').value.trim();
    const answerElement = document.getElementById('answerText');
    const smileyElement = document.getElementById('smiley');

    if (questionInput === "") {
        answerElement.textContent = "Ask your question to receive an answer !!!";
        smileyElement.style.display = "inline";
    } else {
        const answers = [
            "Your answer is: Oh honey, absolutely yes!",
            "Your answer is: No way, darling!",
            "Your answer is: Maybe, if you're lucky.",
            "Your answer is: Most likely, sweetheart.",
            "Your answer is: It's very possible, my dear.",
            "Your answer is: Not right now, love.",
            "Your answer is: Yes, but later, patience is key.",
            "Your answer is: For now, yes. Keep it cool.",
            "Your answer is: Yes, but you'll have to wait, sugar.",
            "Your answer is: Not likely, better luck next time.",
            "Your answer is: Sorry, not really. Try again.",
            "Your answer is: Big yes! Go for it, superstar!",
            "Your answer is: Big no, darling. Move on.",
            "Your answer is: Not a definite no, but close.",
            "Your answer is: Not a definite yes, but you're close."
        ];

        const randomIndex = Math.floor(Math.random() * answers.length);
        const answer = answers[randomIndex];

        answerElement.textContent = answer;
        smileyElement.style.display = "none";
    }
});
