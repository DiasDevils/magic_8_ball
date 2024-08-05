document.getElementById('askButton').addEventListener('click', function() {
    const answers = [
        "Certainly Yes",
        "Definitely No",
        "Maybe",
        "It's likely",
        "It's very possible",
        "Not right now",
        "Yes but later",
        "For now yes",
        "Yes, In a Distant Future",
        "Not Likely",
        "Sorry Not Really",
        "Big Yes",
        "Big No",
        "Small No",
        "Small Yes"
    ];

    const randomIndex = Math.floor(Math.random() * answers.length);
    const answer = answers[randomIndex];
    
    document.getElementById('answer').textContent = answer;
});