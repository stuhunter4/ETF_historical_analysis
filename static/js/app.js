// create first chart upon opening page
//runStart();

// from data.js, assign data to a descriptive variable
var tableData = data;

// select the dropdown selection
var slist = d3.select("#slist");

// select the buttons for filtering period
var one_mo = d3.select("#one_mo");
var three_mo = d3.select("#three_mo");
var six_mo = d3.select("#six_mo");
var one_yr = d3.select("#one_yr");
var five_yr = d3.select("#five_yr");
var ten_yr = d3.select("#ten_yr");
var max = d3.select("#max");

// create event handlers for selecting a list option
//slist.on("change", runEnter);

// buttons
//one_mo.on("click", run1Month);
//three_mo.on("click", run3Month);
//six_mo.on("click", run6Month);
one_yr.on("click", run1Year);
//five_yr.on("click", run5Year);
//ten_yr.on("click", run5Year);
//max.on("click", runMax);

function run1Year() {
    // prevent the page from refreshing
    d3.event.preventDefault();
    // select the input element and get the raw HTML node
    var listElement = d3.select("#sel");

    // get the value property of the input element
    var etfValue = listElement.property("value");

    // create variable for period date
    var dateValue = '2020-03-18';
    
    // filter() uses input and date as its argument
    var filteredData = tableData.filter(etf => etf.symbol === etfValue && etf.Date >= dateValue && etf.Date <= '2021-03-18');
    //console.log(filteredData);

    // use the map method with the arrow function to return all the filtered week numbers.
    var adj_close = filteredData.map(etf => etf['Adj Close']);
    var close = filteredData.map(etf => etf.Close);
    var dates = filteredData.map(etf => etf.Date);

    // create traces
    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: 'Close',
        x: dates,
        y: close,
        line: {color: '#17BECF'}
    };

    var trace2 = {
        type: "scatter",
        mode: "lines",
        name: 'Adj. Close',
        x: dates,
        y: adj_close,
        line: {color: '#7F7F7F', alpha: 0.5}
    };

    var data = [trace1, trace2];

    var layout = {
        title: `${etfValue}`,
      };

    var config = {responsive: true}

    // plot the chart to a div tag with id "plot"
    Plotly.newPlot("plot", data, layout, config);
}