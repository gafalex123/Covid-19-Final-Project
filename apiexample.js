var world = 0;


function fetchData() {
	world = 1;
	fetch('https://api.covid19api.com/summary')
    .then(response => response.json())
    .then(data => updatePage(data) 
    );
}

function fetchWorld() {
	world = 2;
	fetch('https://api.covid19api.com/summary')
	.then(response => response.json())
	.then(data => updatePage(data) 
	);
}

function search(){
	world = 3;
	fetch('https://api.covid19api.com/summary')
	.then(response => response.json())
	.then(data => updatePage(data) 
	);
}

function updatePage(data){
	
	if(world === 1){
		var countries
		for (countries in data){
			createPage(data);
		}
	}else if(world === 2){
		createPage2(data.Global);
	}else if(world === 3){
		createPage3(data)
	}
}

function createPage (data){
	
	for (place in data) {
        var place = 0;
		var Area = data[place].Country;
		var NewConfirmed = data[place].NewConfirmed;
		var TotalConfirmed = data[place].TotalConfirmed;
		var TotalDeaths = data[place].TotalDeaths;
		var output = "";
		var countryList = document.createElement("div");
			
		output += "<li>";
		output += "<div>Country: " + Area + "</div>";
		output += "<div>New Infected: " + NewConfirmed + "</div>";
		output += "<div>Total Infected: " + TotalConfirmed+ "</div>";
		output += "<div>Total Deaths: " + TotalDeaths + "</div>";
		output += "</li>";
		place++;
		countryList.innerHTML = output;
    }
}

function createPage2 (global){
	document.getElementById("area").innerHTML = "Area: Worldwide";
	document.getElementById("newInfect").innerHTML = "New Infected: " + global.NewConfirmed;
	document.getElementById("total").innerHTML = "Total Infected: " + global.TotalConfirmed;
	document.getElementById("death").innerHTML = "Deaths: " + global.TotalDeaths;
}

function createPage3 (data){
	console.log("data is ");
	console.log(data);
	
	let locationOfSearch = 0;
	
	
	// finds location of country that was searched for
	for (var i = 0; i < data.Countries.length; i++) {
		var searchResult = document.getElementById("search").value;
		if (data.Countries[i].Country === searchResult) {
			locationOfSearch = i;
			break;
		}else{
			invalidSearch();
		}
		
	}
	
	
	document.getElementById("area").innerHTML = "Area: " + data.Countries[locationOfSearch].Country;
	document.getElementById("newInfect").innerHTML = "New Infected: " + data.Countries[locationOfSearch].NewConfirmed;
	document.getElementById("total").innerHTML = "Total Infected: " + data.Countries[locationOfSearch].TotalConfirmed;
	document.getElementById("death").innerHTML = "Deaths: " + data.Countries[locationOfSearch].TotalDeaths;
	
}

function invalidSearch(){
	document.getElementById("area").innerHTML = "Your search was invalid, try again. This site has yet to allow lower-case letters, try capitalizing";
	document.getElementById("newInfect").innerHTML = "";
	document.getElementById("total").innerHTML = "";
	document.getElementById("death").innerHTML = "";
}







