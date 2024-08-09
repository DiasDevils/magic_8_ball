## Second project PP2_8_ball_game

# Magic_8_ball Game
<b> Link to deployed game <b>: https://diasdevils.github.io/magic_8_ball/

The 8 ball game is an entertainment website. 
It is there as a passtime game to ask a yes or no question and receive a yes or no answer.

# Design 
My design of this game really stems from my interest in fortune telling. It paves the way for designing a more complex website of tarot card reading in future. The background is very suiting of a crystal ball dark and mystic and the game of the 8 ball is world famous. It is entertaining and there are crowds that love fortune telling.

# Features
1. It has a weclome section.

The welcome section gives insturctions in case someone is unfamiliar with the Magic 8 ball game. Then once the user presses the next button it moves along to the next section. 

![Feature One](assets/images/featureOne.jpg)

2. An input name section.

This second section asks the user to input their name. This feature makes the game more personalised for a warmer experience. It also validates there is a name provided so it does expect a user input.

![Feature Two](assets/images/featureTwo.jpg)

3. And lastly the game section.

The game section gives cute sassy answers by referencing the user name previously given.
It validates when the user inputs a question. If no question is written in the box, it does ask for an input, otherwise no answer is given. The game serves the purpose of entertainment. 

![Feature Three](assets/images/featureThree.jpg)

## Look in Computer Size

Since the game actually looked ok on all devices when resizing no media queries were needed.

![Computer Size](assets/images/weclomeComputer.jpg)
![Computer Size](assets/images/usernameComputer.jpg)
![Computer Size](assets/images/questionComputer.jpg)

## Look in Notepad Size
![Notepad Size](assets/images/notepadSize.jpg)

## Look in Mobile Size
![Mobile Size](assets/images/mobileSize.jpg)

# Testing

1. The testing of HTML has been done using the validator.
![Validation HTML](assets/images/val1.png)

2. The testing of CSS has also been done using the validator.
![Validation CSS](assets/images/val2.png)

3. The testing of accessibility.
![Validation CSS](assets/images/lighthouseTest.png)

4. The testing of javascript through validator.
![Validation JS](assets/images/validatorJs.png)

# Bugs
There were several bugs.
One, the user did not have to initialy write a question. If the ask button was clicked answers were provided without a qustion input.
The second bug was encounterd when i was trying to hide the sections so that it would move swiftly along to the next section i.e. from welcome to name to game sections. The next button was not working. The issue was I had named the container the same instead of the next container name so that it would move to the next section.
Thirdly, the warnings for javascript, seems that the code is not accessible for all the es versions as per javascript validator. Added comments  /* jshint esversion: 6 */ and /* jshint moz: true */ and run through the validator again and the warnings disappeared.


# References
* Smiley Face https://favicon.io/emoji-favicons/winking-face/
* Eight Ball https://icons8.com/icons/set/eight-ball
* Image of the magic ball was created by Kelsy DeCosta using Microsoft Sweeftkey AI.
* Validator HTML https://jigsaw.w3.org/css-validator/validator
* Validator CSS https://validator.w3.org/


## Huge thank you to my Jedi mentor Richard Wells.
Enhancement ideas and code suggestions by Richard Wells, particularly thankful for the guidance in the Welcome and Username Sections.
Other sections of code come from open source or code how to googling.
