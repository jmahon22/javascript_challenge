// from data.js
var tableData = data;

// reference table body
var tbody = d3.select("tbody");

// create a function to build table
function buildTable(table){

    // loop through data
    table.forEach((item) => {

    // append
    let row = tbody.append("tr");

    // iterate through keys and values
    Object.entries(item).forEach(([key, value]) => {

    // Append 
    let cell = row.append("td");

    // add the text value to each cell
    cell.text(value);

    });
  });
}
// Use a date form in your HTML document and write JavaScript code that will listen for events 
//and search through the `date/time` column to find rows that match user input.


function handleClick() {

    // stops the page from refreshing
    d3.event.preventDefault();

    // clears data of the current table   
    tbody.html("");

    var filteredData = tableData



// Assigning an action to Filter Table button when it's clicked
d3.select("#filter-btn").on("click", handleClick);

// Assigning an action when user hits Enter key
d3.select("form").on("submit", handleClick);

// Call build the table function at the end 
buildTable(tableData);
