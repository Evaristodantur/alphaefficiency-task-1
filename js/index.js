    // Set the target date to November 17
    var targetDate = new Date('2023-11-17T00:00:00');

    // Update the countdown every second
    var countdown = document.getElementById('countdown');
    var daysTR = document.getElementById('days');
    var hoursTR = document.getElementById('hours');
    var minutesTR = document.getElementById('minutes');
    var secondsTR = document.getElementById('seconds');
    
    var countdownInterval = setInterval(function() {
        var currentTime = new Date();
        var timeDifference = targetDate - currentTime;
    
        // Check if the target date has been reached
        if (timeDifference <= 0) {
            clearInterval(countdownInterval);
            countdown.textContent = 'Countdown expired';
        } else {
            var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
            daysTR.textContent = days;
            hoursTR.textContent = hours;
            minutesTR.textContent = minutes;
            secondsTR.textContent = seconds;
        }
    }, 1000); // Update every 1 second


    function toggleAnswer(number) {
        const answer = document.querySelector('.container-6-text-' + number); // Get the element with the specified class
        if (answer.classList.contains('display-none-6')) {
            answer.classList.remove('display-none-6');
            answer.classList.add('display-block');
        } else {
            answer.classList.remove('display-block');
            answer.classList.add('display-none-6');
        }
    }