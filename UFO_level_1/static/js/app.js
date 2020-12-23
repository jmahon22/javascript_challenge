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
// Select the button
var button = d3.select("#filter-btn");
// Select the form
var form = d3.select("#form");
