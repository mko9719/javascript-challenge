// Assign the data from `data.js` to a descriptive variable
var sightings = data;

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");
var tbody = d3.select("tbody")
var table = d3.select("table")

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  // jQuery method for emptying the existing table each time
    // a new query is performed
    $("#tbody").empty();

  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  var filteredData = data.filter(data => data.datetime === inputValue);
  d3.event.preventDefault();
  filteredData.forEach((UFO_Sightings) => {
      var row = tbody.append("tr");
      Object.entries(UFO_Sightings).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
      });
  });
    // jQuery method for emptying the input field after click
    $("#datetime").val('');
};

 // console.log(filteredData);

  // BONUS: Calculate summary statistics for the age field of the filtered data

  // First, create an array with just the age values
//   var ages = filteredData.map(person => person.age);

//   // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
//   var mean = math.mean(ages);
//   var median = math.median(ages);
//   var mode = math.mode(ages);
//   var variance = math.var(ages);
//   var standardDeviation = math.std(ages);

//   // Then, select the unordered list element by class name
//   var list = d3.select(".summary");

//   // remove any children from the list to
//   list.html("");

//   // append stats to the list
//   list.append("li").text(`Mean: ${mean}`);
//   list.append("li").text(`Median: ${median}`);
//   list.append("li").text(`Mode: ${mode}`);
//   list.append("li").text(`Variance: ${variance}`);
//   list.append("li").text(`Standard Deviation: ${standardDeviation}`);
// };
