const seconds = 1000,
minute = seconds * 60,
hour = minute * 60, 
day = hour * 24;

let countDown = new Date('November 30, 2021 00:00:00').getTime(),
    x =setInterval(function() {

        let now = new Date().getTime(),
            distance = countDown - now;
        document.getElementById('days').querySelector('.up').querySelector('span').innerText = Math.floor(distance/ (day)),
        document.getElementById('hours').querySelector('.up').querySelector('span').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').querySelector('.up').querySelector('span').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').querySelector('.up').querySelector('span').innerText = Math.floor((distance % (minute)) / (seconds))
        

}, seconds)



