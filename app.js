/ Assign the data from `data.js` to a descriptive variable
// var sightings = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");
var tbody = d3.select("tbody")
// var table = d3.select("table")
// upload the table
tbody.html("");
    data.forEach((ufoData) => {
        var eachRow = tbody.append("tr")
        // loop through each row
        Object.values(ufoData).forEach((value) => {
            var eachTd = eachRow.append("td")
