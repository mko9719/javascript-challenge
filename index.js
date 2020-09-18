// Create Reference to table body in data.js
var tbody = d3.select("tbody");

// Console.log the sighting data from data.js
console.log(data)

// Loop through the data and console.log each sighting object
data.forEach((UfoSighting) => {
    console.log(UfoSighting);
    var row = tbody.append("tr");
    Object.values(UfoSighting).forEach((value) => {
        var td = row.append("td");
        td.text(value);
    });
});



// // Use d3 to append one table row tr for each sighting object
// data.forEach(function(UfoSighting) {
//     console.log(UfoSighting);
//     var row = tbody.append("tr");
// });

// // Use `Object.entries` to console.log each sighting report value
// data.forEach(function(UfoSighting) {
//     console.log(UfoSighting);
//     var row = tbody.append("tr");
//     Object.entries(UfoSighting).forEach(function([key, value]) {
//         console.log(key, value)
//     });
// });

// // Use d3 to append 1 cell per sighting value (datetime, city, state, country, shape, durationMinutes, comments)
// data.forEach(function(UfoSighting) {
//     console.log(UfoSighting);
//     var row = tbody.append("tr");


        