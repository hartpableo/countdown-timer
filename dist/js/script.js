// Declare variables
const timer = document.getElementById('timer');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const hoursInput = document.querySelector('input[name="Hours"]');
const minutesInput = document.querySelector('input[name="Minutes"]');
const secondsInput = document.querySelector('input[name="Seconds"]');
const setTimerButton = document.getElementById('set-timer');

// "Set Timer" button
setTimerButton.addEventListener('click', (e) => {
    e.preventDefault();
    setCountdown();
});

// Set time
function setCountdown() {

    // Time units (in milliseconds))
    const unitSeconds = 1000;
    const unitMinutes = unitSeconds * 60;
    const unitHours = unitMinutes * 60;
    
    // Time values from input
    let hoursValue = Math.floor(parseInt(hoursInput.value) * unitHours);
    let minutesValue = Math.floor(parseInt(minutesInput.value) * unitMinutes);
    let secondsValue = Math.floor(parseInt(secondsInput.value) * unitSeconds);
    const totalTimeValueInMilliseconds = hoursValue + minutesValue + secondsValue;
    
    // Timeframe
    const futureDate = new Date();
    futureDate.setTime( new Date().getTime() + totalTimeValueInMilliseconds );
    const end = futureDate.getTime();
    const start = new Date().getTime();
    const gap = end - start;

    const hrs = Math.floor(gap / unitHours);
    const mins = Math.floor( (gap % unitHours) / unitMinutes );
    const secs = Math.floor( (gap % unitMinutes) / unitSeconds );
    
}