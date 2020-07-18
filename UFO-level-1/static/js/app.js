// from data.js
var tableData = data;
var filteredData = tableData.filter(sighting => sighting.datetime === "1/1/2010");

// reference the table body
var tbody = d3.select("tbody");

function buildTable(data) {


  tbody.html(" ")

  // Console.log the ufo data from data.js
  console.log(data);

  // update each cell's text with ufo sighting object values
  data.forEach(function(ufoSightings) {
    console.log(ufoSightings);

    // append a row to the table for each ufo sighting object
    var row = tbody.append("tr");

    // add data to the row
    Object.entries(ufoSightings).forEach(function([key, value]) {
      console.log(key, value);
      
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

// select user input from webpage
var button = d3.select("#filter-btn");

function runEnter() { 
  // Prevent the page from refreshing so it will run the code below
  d3.event.preventDefault();
  var inputValue = d3.select(".form-control").property("value");

  // filter the table on the date/time column to display rows matching user input
  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

  // filteredData.map(sightings => sightings.datetime)
  console.log(filteredData);
  buildTable(filteredData);
};

button.on("click", runEnter);

buildTable(tableData);


