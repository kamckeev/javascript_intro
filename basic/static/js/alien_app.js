    
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
var button = d3.select("filter-btn")

// filter data with desired date
function changeHandler(){
    d3.event.preventDefault();
    console.log(inputDate.property("value"));
    var new_table = tableData.filter(sighting => sighting.datetime===inputDate.property("value"))
    displayData(new_table)
}

// event listener to handle change and click
inputDate.on("change", changeHandler)
button.on("click", changeHandler)