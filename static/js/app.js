// from data.js, assign data to a descriptive variable
var tableData = data;
var dates_list = ['2021-03-18', '2021-02-16', '2020-12-17', '2020-09-17', '2020-03-18', '2016-03-19', '2011-03-21'];

// create first chart upon opening page
runStart();

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
slist.on("change", runMax);

// buttons
one_mo.on("click", run1Month);
three_mo.on("click", run3Month);
six_mo.on("click", run6Month);
one_yr.on("click", run1Year);
five_yr.on("click", run5Year);
ten_yr.on("click", run10Year);
max.on("click", runMax);

function runStart() {
    var startValue = 'QQQ';
    var todayValue = dates_list[0];
    // filter() uses input and date as its argument
    var filteredData = tableData.filter(etf => etf.symbol === startValue);
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
        fill: 'tozeroy',
        line: {color: '#17BECF'}
    };
    var trace2 = {
        type: "scatter",
        mode: "lines",
        name: 'Adj. Close',
        x: dates,
        y: adj_close,
        line: {color: '#a0a8d9', alpha: 0.5}
    };
    var data = [trace1, trace2];
    var layout = {
        title: `${startValue}: ${todayValue}`,
      };
    var config = {responsive: true}
    // plot the chart to a div tag with id "plot"
    Plotly.newPlot("plot", data, layout, config);
}

function run1Month() {
    // prevent the page from refreshing
    d3.event.preventDefault();
    // select the input element and get the raw HTML node
    var listElement = d3.select("#sel");
    // get the value property of the input element
    var etfValue = listElement.property("value");
    // create variable for period date
    var todayValue = dates_list[0];
    var dateValue = dates_list[1];
    // filter() uses input and date as its argument
    var filteredData = tableData.filter(etf => etf.symbol === etfValue && etf.Date >= dateValue && etf.Date <= todayValue);
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
        fill: 'tozeroy',
        line: {color: '#17BECF'}
    };
    var trace2 = {
        type: "scatter",
        mode: "lines",
        name: 'Adj. Close',
        x: dates,
        y: adj_close,
        line: {color: '#a0a8d9', alpha: 0.5}
    };
    var data = [trace1, trace2];
    var layout = {
        title: `${etfValue}: 1M, ${todayValue}`,
      };
    var config = {responsive: true}
    // plot the chart to a div tag with id "plot"
    Plotly.newPlot("plot", data, layout, config);
}

function run3Month() {
    // prevent the page from refreshing
    d3.event.preventDefault();
    // select the input element and get the raw HTML node
    var listElement = d3.select("#sel");
    // get the value property of the input element
    var etfValue = listElement.property("value");
    // create variable for period date
    var todayValue = dates_list[0];
    var dateValue = dates_list[2];
    // filter() uses input and date as its argument
    var filteredData = tableData.filter(etf => etf.symbol === etfValue && etf.Date >= dateValue && etf.Date <= todayValue);
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
        fill: 'tozeroy',
        line: {color: '#17BECF'}
    };
    var trace2 = {
        type: "scatter",
        mode: "lines",
        name: 'Adj. Close',
        x: dates,
        y: adj_close,
        line: {color: '#a0a8d9', alpha: 0.5}
    };
    var data = [trace1, trace2];
    var layout = {
        title: `${etfValue}: 3M, ${todayValue}`,
      };
    var config = {responsive: true}
    // plot the chart to a div tag with id "plot"
    Plotly.newPlot("plot", data, layout, config);
}

function run6Month() {
    // prevent the page from refreshing
    d3.event.preventDefault();
    // select the input element and get the raw HTML node
    var listElement = d3.select("#sel");
    // get the value property of the input element
    var etfValue = listElement.property("value");
    // create variable for period date
    var todayValue = dates_list[0];
    var dateValue = dates_list[3];
    // filter() uses input and date as its argument
    var filteredData = tableData.filter(etf => etf.symbol === etfValue && etf.Date >= dateValue && etf.Date <= todayValue);
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
        fill: 'tozeroy',
        line: {color: '#17BECF'}
    };
    var trace2 = {
        type: "scatter",
        mode: "lines",
        name: 'Adj. Close',
        x: dates,
        y: adj_close,
        line: {color: '#a0a8d9', alpha: 0.5}
    };
    var data = [trace1, trace2];
    var layout = {
        title: `${etfValue}: 6M, ${todayValue}`,
      };
    var config = {responsive: true}
    // plot the chart to a div tag with id "plot"
    Plotly.newPlot("plot", data, layout, config);
}

function run1Year() {
    // prevent the page from refreshing
    d3.event.preventDefault();
    // select the input element and get the raw HTML node
    var listElement = d3.select("#sel");
    // get the value property of the input element
    var etfValue = listElement.property("value");
    // create variable for period date
    var todayValue = dates_list[0];
    var dateValue = dates_list[4];
    // filter() uses input and date as its argument
    var filteredData = tableData.filter(etf => etf.symbol === etfValue && etf.Date >= dateValue && etf.Date <= todayValue);
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
        fill: 'tozeroy',
        line: {color: '#17BECF'}
    };
    var trace2 = {
        type: "scatter",
        mode: "lines",
        name: 'Adj. Close',
        x: dates,
        y: adj_close,
        line: {color: '#a0a8d9', alpha: 0.5}
    };
    var data = [trace1, trace2];
    var layout = {
        title: `${etfValue}: 1Y, ${todayValue}`,
      };
    var config = {responsive: true}
    // plot the chart to a div tag with id "plot"
    Plotly.newPlot("plot", data, layout, config);
}

function run5Year() {
    // prevent the page from refreshing
    d3.event.preventDefault();
    // select the input element and get the raw HTML node
    var listElement = d3.select("#sel");
    // get the value property of the input element
    var etfValue = listElement.property("value");
    // create variable for period date
    var todayValue = dates_list[0];
    var dateValue = dates_list[5];
    // filter() uses input and date as its argument
    var filteredData = tableData.filter(etf => etf.symbol === etfValue && etf.Date >= dateValue && etf.Date <= todayValue);
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
        fill: 'tozeroy',
        line: {color: '#17BECF'}
    };
    var trace2 = {
        type: "scatter",
        mode: "lines",
        name: 'Adj. Close',
        x: dates,
        y: adj_close,
        line: {color: '#a0a8d9', alpha: 0.5}
    };
    var data = [trace1, trace2];
    var layout = {
        title: `${etfValue}: 5Y, ${todayValue}`,
      };
    var config = {responsive: true}
    // plot the chart to a div tag with id "plot"
    Plotly.newPlot("plot", data, layout, config);
}

function run10Year() {
    // prevent the page from refreshing
    d3.event.preventDefault();
    // select the input element and get the raw HTML node
    var listElement = d3.select("#sel");
    // get the value property of the input element
    var etfValue = listElement.property("value");
    // create variable for period date
    var todayValue = dates_list[0];
    var dateValue = dates_list[6];
    // filter() uses input and date as its argument
    var filteredData = tableData.filter(etf => etf.symbol === etfValue && etf.Date >= dateValue && etf.Date <= todayValue);
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
        fill: 'tozeroy',
        line: {color: '#17BECF'}
    };
    var trace2 = {
        type: "scatter",
        mode: "lines",
        name: 'Adj. Close',
        x: dates,
        y: adj_close,
        line: {color: '#a0a8d9', alpha: 0.5}
    };
    var data = [trace1, trace2];
    var layout = {
        title: `${etfValue}: 10Y, ${todayValue}`,
      };
    var config = {responsive: true}
    // plot the chart to a div tag with id "plot"
    Plotly.newPlot("plot", data, layout, config);
}

function runMax() {
    // prevent the page from refreshing
    d3.event.preventDefault();
    // select the input element and get the raw HTML node
    var listElement = d3.select("#sel");
    // get the value property of the input element
    var etfValue = listElement.property("value");
    // create variable for period date
    var todayValue = dates_list[0];
    // filter() uses input and date as its argument
    var filteredData = tableData.filter(etf => etf.symbol === etfValue);
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
        fill: 'tozeroy',
        line: {color: '#17BECF'}
    };
    var trace2 = {
        type: "scatter",
        mode: "lines",
        name: 'Adj. Close',
        x: dates,
        y: adj_close,
        line: {color: '#a0a8d9', alpha: 0.5}
    };
    var data = [trace1, trace2];
    var layout = {
        title: `${etfValue}: ${todayValue}`,
      };
    var config = {responsive: true}
    // plot the chart to a div tag with id "plot"
    Plotly.newPlot("plot", data, layout, config);
}