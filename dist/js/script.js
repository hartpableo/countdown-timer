// Declare variables
const timer = document.getElementById('timer');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const hoursInput = document.querySelector('input[name="Hours"]');
const minutesInput = document.querySelector('input[name="Minutes"]');
const secondsInput = document.querySelector('input[name="Seconds"]');
const setTimerButton = document.getElementById('set-timer');
const snapOfTime = document.getElementById('snap-time');
const inputs = document.querySelectorAll('input:not([type="hidden"])');

// Timer inactive
timer.dataset.status = 'inactive';

// Time units (in milliseconds))
const unitSeconds = 1000;
const unitMinutes = unitSeconds * 60;
const unitHours = unitMinutes * 60;

// Reset input values
function inputsReset() {
    inputs.forEach(( item ) => {
        item.value = '0';
    })
}
inputsReset();

// "Set Timer" button
setTimerButton.addEventListener('click', (e) => {

    e.preventDefault();

    timeSnap();
    let x = setInterval(function countdown() {

        // Timeframe
        const futureDate = parseInt(snapOfTime.value);
        const end = futureDate;
        const start = new Date().getTime();
        const gap = end - start;
    
        // Converted time values
        const hrs = Math.floor(gap / unitHours);
        const mins = Math.floor( (gap % unitHours) / unitMinutes );
        const secs = Math.floor( (gap % unitMinutes) / unitSeconds );
    
        // display time on front-end
        hours.innerText = hrs.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
          });
        minutes.innerText = mins.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
          });
        seconds.innerText = secs.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
          });

        // If countdown reaches zero...
        if (gap < 0) {
            clearInterval(x)
            hours.innerText = '00';
            minutes.innerText = '00';
            seconds.innerText = '00';
            timer.dataset.status = 'inactive';
        }
        
    }, 1000);

    inputsReset();

});

// Countdown


// Take snapshot of time when countdown timer was set
function timeSnap() {
    
    // Time values from input
    const hoursValue = Math.floor(parseInt(hoursInput.value) * unitHours);
    const minutesValue = Math.floor(parseInt(minutesInput.value) * unitMinutes);
    const secondsValue = Math.floor(parseInt(secondsInput.value) * unitSeconds);
    const totalTimeValueInMilliseconds = hoursValue + minutesValue + secondsValue;

    // Future or end date
    const futureDate = new Date();
    futureDate.setTime( new Date().getTime() + totalTimeValueInMilliseconds );

    snapOfTime.value = futureDate.getTime();

    timer.dataset.status = 'running';

}