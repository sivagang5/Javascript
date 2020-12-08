//create request variable
var request = new XMLHttpRequest();

// open a connection
request.open ('GET','https://restcountries.eu/rest/v2/all',true)

//send the request
request.send();

//load the response when ready
request.onload = function() {
	var data = JSON.parse(this.response);

	// Print the country which use US Dollars as currency
	var a = data.filter((x)=>{return x.currencies[0].code==='USD'})
	console.log(a);	

	// Display Sum of population using reduce function
	// pop=[]
	// data.forEach((a,b)=>{pop.push(a.population)})
	// var add = (a,b)=>a+b
	// console.log(pop.reduce(add,0));

	// Print the following details name, capital, flag using forEach function
	// data.forEach((a,b)=>{console.log (a.name,a.capital,a.flag)})

	// Get all the countries with population of less than 2 lacs using Filter function
	// var pop = data.filter((x)=>{return x.population<200000})
	// console.log(pop);

	// Get all the countries from Asia continent /region using Filter function
	// var asian = data.filter((x)=>{return x.region==='Asia'})
	// console.log(asian);

	// Display flag url
	// for (let i in data) {
	// 	console.log(data[i].flag)
	// }

	// Display Sum of population
	// sum=0
	// for (let i in data) {
	// 	sum+=parseInt(data[i].population)
	// }
	// console.log(sum)

}

