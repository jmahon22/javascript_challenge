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

    // append 
    let cell = row.append("td");

    // add text value to each cell
    cell.text(value);
    });
  });
}
// Use a date form in your HTML document and write JavaScript code that will listen for events 
//and search through the `date/time` column to find rows that match user input.


function handleClick() {

    // stops the page from refreshing
    d3.event.preventDefault();

    // clears data from current table   
    tbody.html("");

    var filteredData = tableData

    // select the input element and get the value property of the input element
    var date = d3.select("#datetime").property("value");

    // create an if statement for the filter
    if(date){
        filteredData = filteredData.filter(result => result.datetime === date);
        // build table with filterData
        buildTable(filteredData);
    }  
}

// assigning an action to Filter Table button when it's clicked
d3.select("#filter-btn").on("click", handleClick);

// assigning an action when user hits Enter key
d3.select("form").on("submit", handleClick);

// call build table function at the end 
buildTable(tableData);
