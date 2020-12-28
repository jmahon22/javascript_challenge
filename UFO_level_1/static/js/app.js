// from data.js
var tableData = data;

// reference table body
var tbody = d3.select("tbody");

// append table of ufo data to webpage & add new rows of data for each ufo sighting
tableData.forEach((ufoInfo) => {
    var row = tbody.append("tr");
    Object.entries(ufoInfo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Use a date form in your HTML document and write JavaScript code that will listen for events 
//and search through the `date/time` column to find rows that match user input.
// Select button
var button = d3.select("#filter-btn");
// Select form
var form = d3.select("#form");

// Event handler function and return form
button.on("click", function() {
    // Clear table body
    tbody.html("");
    //Prevent page from refreshing
    d3.event.preventDefault();
    //Select the input element
    var inputElement = d3.select("#datetime");
    //Get the value property of input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    //Filter data
    var matches = tableData.filter(input => input.datetime === inputValue);
    console.log(matches);
    // Append data that matches datetime input to table, so table only shows data that matches users input
    matches.forEach((ufoInput) => {
        console.log(ufoInput);
        var row = tbody.append("tr");
        Object.entries(ufoInput).forEach(([key, value])=> {
            var cell = row.append("td");
            cell.text(value);
        });
    });

});
