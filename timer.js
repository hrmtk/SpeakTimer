let countdown;
const timerDisplay = document.querySelector('.time-left');
const buttons = document.querySelectorAll('[data-time]');
const alert = document.querySelector('.alert');
const ring = document.querySelector('.ring');
let msg = document.getElementById("text-to-speech").value;

function timer(seconds) {
	clearInterval(countdown);
	let timePassed = 0;
	seconds++;
	ring.style.animation = "ring 2s linear infinite";

	countdown = setInterval(() => {
		timePassed += 1;
		let timeLeft = seconds - timePassed;
		if (timeLeft === 0) {
			clearInterval(countdown);
			textToAudio();
			showAlert();
			ring.style.animation = "";
		}
		document.title = formatTime(timeLeft);
		timerDisplay.innerHTML = formatTime(timeLeft);
	}, 1000);
}

function startTimer() {
	const seconds = parseInt(this.dataset.time);
	timer(seconds);
}

function formatTime(seconds) {
	let minutes = Math.floor(seconds / 60);
	let hour = 0;
	if (minutes >= 60) {
		hour = Math.floor(minutes / 60);
		minutes = minutes % 60;
		if (minutes < 10) {
			minutes = `0${minutes}`;
		}
	}

	if (hour === 0) {
		hour = '';
	} else {
		hour = `${hour}:`;
	}

	let secs = seconds % 60;

	if (secs < 10) {
		secs = `0${secs}`;
	}

	return `${hour}${minutes}:${secs}`;
}

function showAlert() {
	alert.classList.remove('hide');
	alert.classList.add('show');
	alert.classList.add('showAlert');
	const message = document.querySelector('.msg');
	message.innerHTML = msg;

	setTimeout(function() {
		hideAlert();
	}, 5000);

	const close = document.querySelector('.close-btn');
	close.addEventListener('click', function(e) {
		e.preventDefault();
		hideAlert();
	})
}

function hideAlert() {
	alert.classList.add('hide');
	alert.classList.remove('show');
}

function textToAudio() {
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    
    window.speechSynthesis.speak(speech);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e) {
	e.preventDefault();
	const mins = this.minutes.value;
	timer(mins * 60);
	this.reset();
});

document.speechForm.addEventListener('submit', function(e) {
	e.preventDefault();
	msg = this.text.value;
})

setInterval(function(){
	const clock = document.querySelector(".display");
    let time = new Date();
    let sec = time.getSeconds();
    let min = time.getMinutes();
    let hr = time.getHours();
    let day = 'AM';
    if(hr > 12){
    	day = 'PM';
    	hr = hr - 12;
    }
    if(hr == 0){
        hr = 12;
    }
    if(sec < 10){
        sec = '0' + sec;
    }
    if(min < 10){
        min = '0' + min;
    }
    if(hr < 10){
        hr = '0' + hr;
    }
    clock.textContent = hr + ':' + min + ':' + sec + " " + day;
});