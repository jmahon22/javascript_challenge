// from data.js
var tableData = data;

// reference table body
var tbody = d3.select("tbody");

// create a function to build table
function buildTable(table){

    // loop through data
    table.forEach((item) => {

    // append rows
    let row = tbody.append("tr");

    // iterate through keys and values
    Object.entries(item).forEach(([key, value]) => {

    // append cells 
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

    // clears data from current table   
    tbody.html("");

    var filteredData = tableData

    var date = d3.select("#datetime").property("value");
    if(date){
        filteredData = filteredData.filter(result => result.datetime === date);
    }

    var city = d3.select("#city").property("value");
    if(city){
        filteredData = filteredData.filter(result => result.city === city);
    }

    var state = d3.select("#state").property("value");
    if(state){
        filteredData = filteredData.filter(result => result.state === state);
    }

    var country = d3.select("#country").property("value");
    if(country){
        filteredData = filteredData.filter(result => result.country === country);
    }

    var shape = d3.select("#shape").property("value");
    if(shape){
        filteredData = filteredData.filter(result => result.shape === shape);
    }

    // build table 
    buildTable(filteredData);
}

function pageRefresh() {
location.reload();
return false;
}

// assigning an action to Filter Table button when it's clicked
d3.select("#filter-btn").on("click", handleClick);

//page refresh
d3.select("#page-btn").on("click", pageRefresh);


// call build table function at the end
buildTable(tableData);
