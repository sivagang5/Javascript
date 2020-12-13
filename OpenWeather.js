
var request = new XMLHttpRequest();
request.open ('GET','https://restcountries.eu/rest/v2/all',true)
request.send();
var lat; var long;
request.onload = function() {
	var data = JSON.parse(this.response);
	lat = data[104].latlng[0]
	long = data[104].latlng[1]
}

var request2 = new XMLHttpRequest();
var url = "'https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid='d1cfc4f4a5107bc635c27277b85c40a0'"
request2.open ('GET',url ,true)
request2.send();
request2.onload = function() {
	var data2 = JSON.parse(this.response);
		console.log(data2)
}


