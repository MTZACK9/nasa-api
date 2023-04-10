var req = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "DEMO_KEY";

req.open("GET", url + api_key);

req.send();

req.addEventListener("load", () => {
	if (req.status ==  200 && req.readyState == 4)
	{
		var response = JSON.parse(req.responseText);
		document.getElementById("title").innerHTML = response.title;
		document.getElementById("date").innerHTML = response.date;
		document.getElementById("pic").src = response.hdurl;
		document.getElementById("explanation").innerHTML = response.explanation;
	}
});
