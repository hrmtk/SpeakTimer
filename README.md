## SpeakTimer
This is a final project for CS50's Introduction to Computer Science. SpeakTimer is a Web Application that helps the user manage time effectively. The user can focus on something as soon as a button is clicked. SpeakTimer's theme is "Simple and Clean". It does not disturb the user with flashy colors. CSS design was inspired by CodingNepal. It has no too much functions to confuse the user. Clock, Timer, and Alert. That's it. Some functions were inspired by Javascript 30.

### Examples of use
![SpeakTimer](/images/timer.png)
* 🔥[Live Demo](https://hrmtk-speaktimer.herokuapp.com/)🔥 - The app has been deployed to Heroku.
* [Video Demo](https://youtu.be/ZF2j7I3JAWc)

### Table of contents
* [Running the application](#running-the-application)
* [General info](#general-info)
* [File overview](#file-overview)
* [Functions](#functions)
* [Technologies](#technologies)
* [Compatible browsers](#compatible-browsers)
* [Status](#status)
* [Inspiration](#inspiration)

### Running the application
Using Google Chrome as your browser on macOS
```
cd [path to timer folder]
open -a "Google Chrome" index.html
```

### General info
* Display a simple digital clock with the user's device's internal time.
* Display the time remaining and convert the time value to a HH:MM:SS format.
* Display an animated ring while the countdown works.
* Change the initial time remaining by getting text input from user or multiple options(Coffee break 10, Take a nap 15, Coding 45, etc).
* Alert with text and voice message if the countdown is finished.
* Change the alert message by getting text input from user.

### File overview
File name     | Description
------------- | -------------
index.html | Render the initial page.
style.css | Specify the layout of web page. Animate the ring color with various colors. 
timer.js | Program the behavior of web page. Contain all functions it needs.

### Functions
`timer(seconds):` This function can be used to run the timer with argument _seconds_. When timerLeft object is zero, stop the timer.
`startTime():` This function can be used to get the user input as seconds. It will call timer function with seconds.
`formatTime(seconds):` This function will return the current remaining time in HH:MM:SS format.
`showAlert():` This function can be used to display the alert message. It will be hidden after 5 seconds or the close button is clicked.
`hideAlert():` This function is called in showAlert function.
`textToAudio():` This function uses the `SpeechSynthesis(Text-to-Speech)` interface of the Web Speech API. It can be used to read out message (normally via the device's default speech synthesiser.)

### Technologies
* HTML5
* CSS
* JavaScript
* [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

### Compatible browsers
* Chrome (tested: Woman's default voice.)
* Firefox (tested: Not Recommend. Because of voice quality.)
* Safari (tested: Man's default voice.)
* Opera
* Edge

### Status
Project is: _finished_

### Certificate
* [Yay!](https://cs50.harvard.edu/certificates/e32a940f-347c-431b-b036-b9556169bd8a)

### Inspiration
* [CS50's Introduction to Computer Science](https://cs50.harvard.edu/x/2021/)
* [JavaScript 30](https://javascript30.com/)
* [CodingNepal](https://www.codingnepalweb.com/)