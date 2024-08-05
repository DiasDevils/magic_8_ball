document.getElementById('askButton').addEventListener('click', function() {

    const answers = [
        "Your answer is : Certainly yes",
        "Your answer is : Definitely no",
        "Your answer is : Maybe",
        "Your answer is : It's likely",
        "Your answer is : It's very possible",
        "Your answer is : Not right now",
        "Your answer is : Yes but later",
        "Your answer is : For now yes",
        "Your answer is : Yes, but in future",
        "Your answer is : Not likely",
        "Your answer is : Sorry not really",
        "Your answer is : Big yes",
        "Your answer is : Big no",
        "Your answer is : Not a definite no",
        "Your answer is : Not a definite yes",
        "Your answer is : Perhaps"
    ];

    const randomIndex = Math.floor(Math.random() * answers.length);
    const answer = answers[randomIndex];
    
    document.getElementById('answer').textContent = answer;
});