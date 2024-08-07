/* getting the containers */
const welcomeContainer = document.getElementById('welcomeContainer');
const nameContainer = document.getElementById('nameContainer');
const gameContainer = document.getElementById('gameContainer');

/* getting the buttons */
const welcomeButton = document.getElementById('welcomeButton');
const nameButton = document.getElementById('nameButton');

/* getting the error and username */
const nameError = document.getElementById('nameError');
const nameInput = document.getElementById('username');

/* declaring the var to store username */
let username;

welcomeButton.addEventListener('click', function () {
    welcomeContainer.classList.add('hide');
    nameContainer.classList.remove('hide');
});

nameButton.addEventListener('click', function () {
    nameError.classList.add('hide');

    if (nameInput.value != '') {
        username = nameInput.value;
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
            `Oh ${username}, absolutely yes!`,
            `No way, ${username}!`,
            `Maybe, if you're lucky ${username}!`,
            `Most likely ${username}!`,
            `It's very possible my dear ${username}!`,
            `Not right now ${username} bear!`,
            `Yes, but later, patience is key dear ${username}!`,
            `For now, yes. Keep it cool. Ice ice cool ${username}!`,
            `Yes, but you'll have to wait ${username} bear!`,
            `Not likely, better luck next time ${username} honey!`,
            `Sorry, not really. Try again ${username}!`,
            `Big yes! Go for it superstar ${username}!`,
            `Big no darling ${username}. Move on!`,
            `Not a definite no, but close ${username}!`,
            `Not a definite yes, but you're close ${username}!`
        ];

        const randomIndex = Math.floor(Math.random() * answers.length);
        const answer = answers[randomIndex];

        answerElement.textContent = answer;
        smileyElement.style.display = "none";
    }
});
