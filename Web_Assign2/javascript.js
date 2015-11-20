$(document).ready(function(){
	displayDigitalClock();
	date();
});
function displayDigitalClock() {
	var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
	h=checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
	var time=h + ":" + m + ":" + s;
	document.getElementById('clock').innerHTML =time;
    var t = setTimeout(displayDigitalClock, 500);
}
function checkTime(element) {
    if (element < 10) {element = "0" + element};  // add zero in front of numbers < 10
    return element;
}
function date()
{
        date = new Date;
        year = date.getFullYear();
        month = date.getMonth();
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
        d = date.getDate();
        day = date.getDay();
        days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        result = ''+days[day]+','+months[month]+' '+d+'---'+year;
        document.getElementById('calendar').innerHTML = result;
        setTimeout(date,'1000');
        return true;
}



