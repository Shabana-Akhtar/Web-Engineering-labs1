$.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
	function(data, status){
		var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		var html = "<table><tr>";
		var date = new Date();
		var day=date.getDate();
		var month=date.getMonth();
		var monthName=monthNames[month];
		var year=date.getFullYear();
		
        for(var i = 0; i < data.query.results.channel.item.forecast.length; i++) {
			if((data.query.results.channel.item.forecast[i].date)==(day+' '+monthName+ ' '+year)) {
				html+='<td id="currDay">';
				var html2 = "";
				html2 += "High: " + data.query.results.channel.item.forecast[i].high + " &deg;F --- ";
				html2 += "Low: " + data.query.results.channel.item.forecast[i].low + " &deg;F<br>";
				html2 += data.query.results.channel.item.forecast[i].text + "<br><br>";
				$('#weather-small').html(html2);
			}
			else {
				html+='<td>';
			}
			
			html += data.query.results.channel.item.forecast[i].date + "<br>";
			html += "High: " + data.query.results.channel.item.forecast[i].high + " &deg;F<br>";
			html += "Low: " + data.query.results.channel.item.forecast[i].low + " &deg;F<br>";
			html += data.query.results.channel.item.forecast[i].text + "<br><br>";
			html+='</td>';
		}
		html += "</tr></table>";
		$('#forecast').append(html);
    });