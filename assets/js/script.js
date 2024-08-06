// document.getElementById('askButton').addEventListener('click', function() {

//     const answers = [
//         "Your answer is : Certainly yes",
//         "Your answer is : Definitely no",
//         "Your answer is : Maybe",
//         "Your answer is : It's likely",
//         "Your answer is : It's very possible",
//         "Your answer is : Not right now",
//         "Your answer is : Yes but later",
//         "Your answer is : For now yes",
//         "Your answer is : Yes, but in future",
//         "Your answer is : Not likely",
//         "Your answer is : Sorry not really",
//         "Your answer is : Big yes",
//         "Your answer is : Big no",
//         "Your answer is : Not a definite no",
//         "Your answer is : Not a definite yes",
//         "Your answer is : Perhaps",
//         "Your answer is : You can count on it",
//         "Your answer is : You may rely on it"
//     ];

//     const randomIndex = Math.floor(Math.random() * answers.length);
//     const answer = answers[randomIndex];
    
//     document.getElementById('answer').textContent = answer;
// });




document.getElementById('askButton').addEventListener('click', function() {
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
