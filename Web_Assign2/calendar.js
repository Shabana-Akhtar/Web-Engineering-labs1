$(document).ready(function(){
	calendarOutput();
});

var days;
var currMonth;

function calendarOutput(){
	var i;
	var date = new Date();
    var day = date.getDate();
    var month = date.getMonth()+1;
	currMonth=month;
    var year = date.getFullYear();
	var dayNo=date.getDay();
	
	var monthNames = ["January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"
	];
	var x=monthNames[month-1]+" "+year;
	document.getElementById('h2').innerHTML=x;
	
	var maxNoOfDays=daysInMonth(month,year);
	console.log(maxNoOfDays);
	
	var firstDay=firstDayOfMonth(month,year);
	console.log("first day:"+firstDay);
	
	noOfRows=Math.floor(maxNoOfDays/7);
	if((maxNoOfDays%7)!=0){noOfRows++;}
	
	days = new Array();
	
	diff=maxNoOfDays%7;
	var remainingDays=7-diff;
	
	if(firstDay!=0){
		for(i=0;i<firstDay;i++){
			days.push(' ');
		console.log(days.length);
		}
	}
	for(i=1;i<=maxNoOfDays;i++){
		days.push(i);	
	}	
	
	for(i=0;i<remainingDays;i++){
		days.push(' ');
	}
		
	console.log(days.length);
	for(i=1;i<days.length;i++){
	}
	
	addRowToTable(i,maxNoOfDays,noOfRows,firstDay,days);
	
}

function prevCalendarOutput(){
	var i;
	var date = new Date();
    var day = date.getDate();
    var month = currMonth-1;
	console.log("prev current:"+currMonth);
	console.log("month="+month);
	if(month <= 0) {
		month = 12;
	}
	currMonth=month;
	console.log("current curr :"+currMonth);
    var year = date.getFullYear();
	var dayNo=date.getDay();
	
	var monthNames = ["January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"
	];
	var x=monthNames[month-1]+" "+year;
	document.getElementById('h2').innerHTML=x;
	
	var maxNoOfDays=daysInMonth(month,year);
	console.log(maxNoOfDays);
	
	console.log("asfand:"+month+" "+year);
	var firstDay=firstDayOfMonth(month,year);
	console.log("first day:"+firstDay);
	
	noOfRows=Math.floor(maxNoOfDays/7);
	if((maxNoOfDays%7)!=0){noOfRows++;}
	
	days = new Array();
	
	diff=maxNoOfDays%7;
	var remainingDays=7-diff;
	
	if(firstDay!=0){
		for(i=0;i<firstDay;i++){
			days.push(' ');
		console.log(days.length);
		}
	}
	for(i=1;i<=maxNoOfDays;i++){
		days.push(i);	
	}	
	
	for(i=0;i<remainingDays;i++){
		days.push(' ');
	}
		
	console.log(days.length);
	for(i=1;i<days.length;i++){
	}
	
	addRowToTable(i,maxNoOfDays,noOfRows,firstDay,days);
	
	
}

function nextCalendarOutput(){
	var i;
	var date = new Date();
    var day = date.getDate();
    var month = currMonth+1;
    var year = date.getFullYear();
	if(month > 12) {
		month = 1;
	}
	currMonth=month;
	var dayNo=date.getDay();
	
	var monthNames = ["January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"
	];
	var x=monthNames[month-1]+" "+year;
	document.getElementById('h2').innerHTML=x;
	
	var maxNoOfDays=daysInMonth(month,year);
	console.log(maxNoOfDays);
	
	var firstDay=firstDayOfMonth(month,year);
	console.log("first day:"+firstDay);
	
	noOfRows=Math.floor(maxNoOfDays/7);
	if((maxNoOfDays%7)!=0){noOfRows++;}
	
	days = new Array();
	
	diff=maxNoOfDays%7;
	var remainingDays=7-diff;
	
	if(firstDay!=0){
		for(i=0;i<firstDay;i++){
			days.push(' ');
		console.log(days.length);
		}
	}
	for(i=1;i<=maxNoOfDays;i++){
		console.log(i);
		days.push(i);	
	}	
	
	for(i=0;i<remainingDays;i++){
		days.push(' ');
	}
		
	console.log(days.length);
	for(i=1;i<days.length;i++){
		console.log(days[i]);
	}
	
	addRowToTable(i,maxNoOfDays,noOfRows,firstDay,days);
	
	
}
function addRowToTable(i,maxNoOfDays,noOfRows,firstDay,days){
	console.log(noOfRows);
	var table = document.getElementById("table");
	while(table.rows.length > 1) {
		table.deleteRow(1);
	}
	var end=0;
	var x;
	var y;
	var limit=1;
	var k=0;
	x=table.insertRow(limit);
	for(var j=0;j<days.length;j++){
		if(end==7){
			limit++;
			x=table.insertRow(limit);
			end=0;
			k=0;
		}
			y=x.insertCell(k);
			y.innerHTML=days[j];
			k++;
		end++;
	}
}


function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}

function firstDayOfMonth(month,year) {
	console.log("function month: " + new Date (year, month-1,1).getDay());
    return new Date (year, month-1,1).getDay();
}