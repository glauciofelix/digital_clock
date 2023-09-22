setInterval(() => {
    let clock = document.getElementById('clock');
    let dayDisplay = document.getElementById('day');
    let month = document.getElementById('month');
    let year = document.getElementById('year');

    // Getting Time
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (minutes <= 9) {
        minutes = `0${minutes}`
    }

    let seconds = date.getSeconds() + 1;
    if (seconds <= 9) {
        seconds = `0${seconds}`
    }

    // Month & Year
    let cMonth = date.getMonth();
    let cYear = date.getFullYear();

    // Days
    let day = date.getDay();

    let dayName = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    // Display AM or PM

    if (hours < 12) {
        document.getElementById('am0rpm').innerHTML = 'AM'
    } else {
        document.getElementById('am0rpm').innerHTML = 'PM'
    }

    // Display Clock
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;

    // Display Day
    dayDisplay.innerHTML = dayName[day];

    // Display Month
    month.innerHTML = cMonth;

    // Display Year
    year.innerHTML = `${cYear}`
}, 1000)