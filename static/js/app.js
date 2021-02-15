// create first chart upon opening page
runStart();

// select the dropdown selection
var slist = d3.select("#slist");

// create event handlers for selecting a list option
slist.on("change", runEnter);

function runEnter() {
    // prevent the page from refreshing
    d3.event.preventDefault();

    // select the input element and get the raw HTML node
    var inputElement = d3.select("#sel");

    // get the value property of the input element
    var inputValue = inputElement.property("value");

    // conditional statement that uses inputValue to create data elements for plotting
    if (inputValue == "QQQ") {
        // use the map method with the arrow function to return all the relevant data for the ETF
        var etf_name = "QQQ";
        var etf_dates = etf_qqq.map(data => data["Date"]);
        var etf_closing = etf_qqq.map(data => data["Close"]);
        var etf_opening = etf_qqq.map(data => data["Open"]);
        var etf_high = etf_qqq.map(data => data["High"]);
        var etf_low = etf_qqq.map(data => data["Low"]);
        var etf_vol = etf_qqq.map(data => data["Volume"]);
    }
    else if (inputValue == "SPLG") {
        var etf_name = "SPLG";
        var etf_dates = etf_splg.map(data => data["Date"]);
        var etf_closing = etf_splg.map(data => data["Close"]);
        var etf_opening = etf_splg.map(data => data["Open"]);
        var etf_high = etf_splg.map(data => data["High"]);
        var etf_low = etf_splg.map(data => data["Low"]);
        var etf_vol = etf_splg.map(data => data["Volume"]);
    }
    else if (inputValue == "IVV") {
        var etf_name = "IVV";
        var etf_dates = etf_ivv.map(data => data["Date"]);
        var etf_closing = etf_ivv.map(data => data["Close"]);
        var etf_opening = etf_ivv.map(data => data["Open"]);
        var etf_high = etf_ivv.map(data => data["High"]);
        var etf_low = etf_ivv.map(data => data["Low"]);
        var etf_vol = etf_ivv.map(data => data["Volume"]);
    }
    else if (inputValue == "VOO") {
        var etf_name = "VOO";
        var etf_dates = etf_voo.map(data => data["Date"]);
        var etf_closing = etf_voo.map(data => data["Close"]);
        var etf_opening = etf_voo.map(data => data["Open"]);
        var etf_high = etf_voo.map(data => data["High"]);
        var etf_low = etf_voo.map(data => data["Low"]);
        var etf_vol = etf_voo.map(data => data["Volume"]);
    }
    else if (inputValue == "SPY") {
        var etf_name = "SPY";
        var etf_dates = etf_spy.map(data => data["Date"]);
        var etf_closing = etf_spy.map(data => data["Close"]);
        var etf_opening = etf_spy.map(data => data["Open"]);
        var etf_high = etf_spy.map(data => data["High"]);
        var etf_low = etf_spy.map(data => data["Low"]);
        var etf_vol = etf_spy.map(data => data["Volume"]);
    }
    else if (inputValue == "DIA") {
        var etf_name = "DIA";
        var etf_dates = etf_dia.map(data => data["Date"]);
        var etf_closing = etf_dia.map(data => data["Close"]);
        var etf_opening = etf_dia.map(data => data["Open"]);
        var etf_high = etf_dia.map(data => data["High"]);
        var etf_low = etf_dia.map(data => data["Low"]);
        var etf_vol = etf_dia.map(data => data["Volume"]);
    }
    else if (inputValue == "ACWI") {
        var etf_name = "ACWI";
        var etf_dates = etf_acwi.map(data => data["Date"]);
        var etf_closing = etf_acwi.map(data => data["Close"]);
        var etf_opening = etf_acwi.map(data => data["Open"]);
        var etf_high = etf_acwi.map(data => data["High"]);
        var etf_low = etf_acwi.map(data => data["Low"]);
        var etf_vol = etf_acwi.map(data => data["Volume"]);
    }
    else if (inputValue == "VEU") {
        var etf_name = "VEU";
        var etf_dates = etf_veu.map(data => data["Date"]);
        var etf_closing = etf_veu.map(data => data["Close"]);
        var etf_opening = etf_veu.map(data => data["Open"]);
        var etf_high = etf_veu.map(data => data["High"]);
        var etf_low = etf_veu.map(data => data["Low"]);
        var etf_vol = etf_veu.map(data => data["Volume"]);
    }
    else {
        var etf_name = "VSS";
        var etf_dates = etf_vss.map(data => data["Date"]);
        var etf_closing = etf_vss.map(data => data["Close"]);
        var etf_opening = etf_vss.map(data => data["Open"]);
        var etf_high = etf_vss.map(data => data["High"]);
        var etf_low = etf_vss.map(data => data["Low"]);
        var etf_vol = etf_vss.map(data => data["Volume"]);
    }

    // create traces
    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: etf_name,
        x: etf_dates,
        y: etf_closing,
        line: {
            color: "#7F7F7F",
            width: 0.35
        }
    };

    var trace2 = {
        type: "candlestick",
        x: etf_dates,
        high: etf_high,
        low: etf_low,
        open: etf_opening,
        close: etf_closing
    };

    var trace3 = {
        type: "bar",
        x: etf_dates,
        y: etf_vol,
        marker: {
            color: "rgb(158,202,225)",
            opacity: 0.6,
            line: {
                color: "rgb(8,48,107)",
                width: 0.5
            }
        }
    };

    // create the data arrays for our plots
    var data = [trace1, trace2];
    var data2 = [trace3];

    // define our plot layouts
    var layout = {
        title: etf_name,
        showlegend: false,
        xaxis: {
            autorange: true,
            title: "Date",
            rangeselector: {
                x: 0,
                y: 1.05,
                xanchor: "left",
                font: {size:10},
                buttons: [{
                    step: "month",
                    stepmode: "backward",
                    count: 1,
                    label: "1M"
                }, {
                    step: "month",
                    stepmode: "backward",
                    count: 3,
                    label: "3M"
                }, {
                    step: "month",
                    stepmode: "backward",
                    count: 6,
                    label: "6M"
                }, {
                    step: "year",
                    stepmode: "backward",
                    count: 1,
                    label: "1Y"
                }, {
                    step: "year",
                    stepmode: "backward",
                    count: 5,
                    label: "5Y"
                }, {
                    step: "year",
                    stepmode: "backward",
                    count: 10,
                    label: "10Y"
                }, {
                    step: "all",
                    label: "MAX"
                }]
            }
        },
        yaxis: {
            autorange: true,
        }
    };

    var config = {responsive: true}

    // plot the chart to a div tag with id "plot"
    Plotly.newPlot("plot", data, layout, config);
    Plotly.newPlot("plot2", data2, layout, config);

};

function runStart() {
    // use the map method with the arrow function to return all the relevant data for the ETF
    var etf_name = "QQQ";
    var etf_dates = etf_qqq.map(data => data["Date"]);
    var etf_closing = etf_qqq.map(data => data["Close"]);
    var etf_opening = etf_qqq.map(data => data["Open"]);
    var etf_high = etf_qqq.map(data => data["High"]);
    var etf_low = etf_qqq.map(data => data["Low"]);
    var etf_vol = etf_qqq.map(data => data["Volume"]);
    
    // create traces
    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: etf_name,
        x: etf_dates,
        y: etf_closing,
        line: {
            color: "#7F7F7F",
            width: 0.35
        }
    };

    var trace2 = {
        type: "candlestick",
        x: etf_dates,
        high: etf_high,
        low: etf_low,
        open: etf_opening,
        close: etf_closing
    };

    var trace3 = {
        type: "bar",
        x: etf_dates,
        y: etf_vol,
        marker: {
            color: "rgb(158,202,225)",
            opacity: 0.6,
            line: {
                color: "rgb(8,48,107)",
                width: 0.5
            }
        }
    };

    // create the data arrays for our plots
    var data = [trace1, trace2];
    var data2 = [trace3];

    // define our plot layouts
    var layout = {
        title: etf_name,
        showlegend: false,
        xaxis: {
            autorange: true,
            title: "Date",
            rangeselector: {
                x: 0,
                y: 1.05,
                xanchor: "left",
                font: {size:10},
                buttons: [{
                    step: "month",
                    stepmode: "backward",
                    count: 1,
                    label: "1M"
                }, {
                    step: "month",
                    stepmode: "backward",
                    count: 3,
                    label: "3M"
                }, {
                    step: "month",
                    stepmode: "backward",
                    count: 6,
                    label: "6M"
                }, {
                    step: "year",
                    stepmode: "backward",
                    count: 1,
                    label: "1Y"
                }, {
                    step: "year",
                    stepmode: "backward",
                    count: 5,
                    label: "5Y"
                }, {
                    step: "year",
                    stepmode: "backward",
                    count: 10,
                    label: "10Y"
                }, {
                    step: "all",
                    label: "MAX"
                }]
            }
        },
        yaxis: {
            autorange: true,
        }
    };

    var config = {responsive: true}

    // plot the chart to a div tag with id "plot"
    Plotly.newPlot("plot", data, layout, config);
    Plotly.newPlot("plot2", data2, layout, config);

};