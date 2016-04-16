CountDownTimer('02/19/2015 10:1 AM', 'countdown');
function CountDownTimer()
{
    var end = new Date(Date.UTC(2015,3,13,23,0,0,0));
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;
    function showRemaining() {
        var now = new Date();
        var distance = now - end;
        // if (distance < 0) {
        //     console.log(distance)
        //     clearInterval(timer);
        //     document.getElementById('days').innerHTML = '00';
        //     document.getElementById('hrs').innerHTML = '00';
        //     document.getElementById('mins').innerHTML = '00';
        //     document.getElementById('secs').innerHTML = '00';
        //     document.getElementById('daysm').innerHTML = '00';
        //     document.getElementById('hrsm').innerHTML = '00';
        //     document.getElementById('minsm').innerHTML = '00';
        //     document.getElementById('secsm').innerHTML = '00';
        //     return;
        // }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);
                // add 0
        if(days < 10) days = '0' + days;
        if(hours < 10) hours = '0' + hours;
        if(minutes < 10) minutes = '0' + minutes;
        if(seconds < 10) seconds = '0' + seconds;
        document.getElementById('days').innerHTML = days;
        document.getElementById('hrs').innerHTML = hours;
        document.getElementById('mins').innerHTML = minutes;
        document.getElementById('secs').innerHTML = seconds;
        document.getElementById('daysm').innerHTML = days;
        document.getElementById('hrsm').innerHTML = hours;
        document.getElementById('minsm').innerHTML = minutes;
        document.getElementById('secsm').innerHTML = seconds;
    }
    timer = setInterval(showRemaining, 1000);
}