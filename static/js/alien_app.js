    
// from ufo_data.js
var tableData = ufo_data;

// select tbody using ds
var tbody = d3.select("tbody")

// using Object.entries to get into key and value pairs of data inside of the table
// and loop through them to add to the table in html
function displayData(data){ 
    tbody.text("")
    data.forEach((sighting)=> {
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(([key, value])=> {
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)

var inputDate = d3.select("#datetime")
var inputCity= d3.select('#city')
var inputState= d3.select('#state')
var inputCountry= d3.select('#country')
var inputDescribe = d3.select('#shape')
var button = d3.select("filter-btn")


// filter data with desired date
function handleDateChange(){
    d3.event.preventDefault();
    console.log(inputDate.property("value"));
    var new_table = tableData.filter(sighting => sighting.datetime===inputDate.property("value"))
    displayData(new_table)
}

// event listener to handle change and click
inputDate.on("change", handleDateChange)
button.on("click", handleDateChange)

////////////////////more filter boxes/////////////

function handleCityChange(){
    d3.event.preventDefault();
    console.log(inputCity.property("value"));
    var new_table = tableData.filter(sighting => sighting.city===inputCity.property("value"))
    displayData(new_table)
}
inputCity.on("change", handleCityChange)
button.on("click", handleCityChange)


function handleStateChange(){
    d3.event.preventDefault();
    console.log(inputState.property("value"));
    var new_table = tableData.filter(sighting => sighting.state===inputState.property("value"))
    displayData(new_table)
}
inputState.on("change", handleStateChange)
button.on("click", handleStateChange)



function handleCountryChange(){
    d3.event.preventDefault();
    console.log(inputCountry.property("value"));
    var new_table = tableData.filter(sighting => sighting.country===inputCountry.property("value"))
    displayData(new_table)
}
inputCountry.on("change", handleCountryChange)
button.on("click", handleCountryChange)



function handleDescribeChange(){
    d3.event.preventDefault();
    console.log(inputDescribe.property("value"));
    var new_table = tableData.filter(sighting => sighting.shape===inputDescribe.property("value"))
    displayData(new_table)
}
inputDescribe.on("change", handleDescribeChange)
button.on("click", handleDescribeChange)