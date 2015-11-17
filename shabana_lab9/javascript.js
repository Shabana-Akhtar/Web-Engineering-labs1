var app = angular.module("myApp", []);
app.controller("calendar", function($scope) {
	var i;
	var date = new Date();
    var day = date.getDate();
    var month = date.getMonth()+1;
    var year = date.getFullYear();
	var dayNo=date.getDay();
	
	var monthNames = ["January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"
	];

	$scope.monthTo = {};
    $scope.monthTo.title = monthNames[month-1]+" "+year;
	console.log(dayNo);
	
	var days = new Array();
	
	var maxNoOfDays=daysInMonth(month,year);
	console.log(maxNoOfDays);
	
	var firstDay=firstDayOfMonth(month,year);
	console.log(firstDay);
	
	
	for(i=1;i<=maxNoOfDays;i++){
		days.push(i);	
	}	
	for(i=1;i<days.length;i++){
		console.log(days[i]);
	}
	
	$scope.day = days;
	
}); 

function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}

function firstDayOfMonth(month,year) {
    return new Date (year, month-1,1).getDay();
}
/*
function pouchDB(){
	var db = new PouchDB('dev');
    insert(json);
}
function insert(json){
    var param2 = {
        url: json + 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22islamabad%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
        dataType: 'json',
        cache: false,
        type: 'GET'
    };
    $.ajax(param2)
        .done(function(data){
            db.bulkDocs(data).then(function (result) {
                console.log('Row inserted Successfully');
            }).catch(function (err) {
                console.log('Unable to insert into DB. Error: ' + err.name + ' - ' + err.message);
            });            
        });
}
	
}*/