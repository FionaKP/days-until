// Set the preseason start date (August 16, 2025)
const preseasonDate = new Date('August 16, 2025 00:00:00').getTime();

// Update the countdown every second
const countdown = setInterval(() => {
    // Get current date and time
    const now = new Date().getTime();
    
    // Find the time remaining between now and the preseason date
    const timeRemaining = preseasonDate - now;
    
    // Calculate days, hours, minutes and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    // Display the result
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
    
    // If the countdown is over, display a message
    if (timeRemaining < 0) {
        clearInterval(countdown);
        document.getElementById('days').innerText = '0';
        document.getElementById('hours').innerText = '0';
        document.getElementById('minutes').innerText = '0';
        document.getElementById('seconds').innerText = '0';
        document.getElementById('message').innerHTML = '<h2>Preseason is here! Time to shine!</h2>';
    }
}, 1000);