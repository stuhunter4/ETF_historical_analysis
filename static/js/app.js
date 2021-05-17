// from data.js, assign data to a descriptive variable
var tableData = data;
var dates_list = ['2021-05-14', '2021-04-14', '2021-02-12', '2020-11-13', '2020-05-14', '2016-05-15', '2011-05-17'];

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
    var close = filteredData.map(etf => etf.Close);
    var adj_close = filteredData.map(etf => etf['Adj Close']);
    var open = filteredData.map(etf => etf.Open);
    var high = filteredData.map(etf => etf.High);
    var low = filteredData.map(etf => etf.Low);
    var dates = filteredData.map(etf => etf.Date);
    var volume = filteredData.map(etf => etf.Volume);
    // create traces
    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: 'Close',
        x: dates,
        y: close,
        //fill: 'tozeroy',
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
    var trace3 = {
        type: "candlestick",
        x: dates,
        high: high,
        low: low,
        open: open,
        close: close,
        increasing: {line: {color: 'green'}},
        decreasing: {line: {color: 'red'}},
    };
    var trace4 = {
        type: "bar",
        x: dates,
        y: volume,
        marker: {
            color: "rgb(158,202,225)",
            opacity: 0.6,
            line: {
                color: "rgb(8,48,107)",
                width: 0.5
            }
        }
    };
    var data = [trace1, trace2];
    var data2 = [trace3];
    var data3 = [trace4];
    var layout = {
        
        title: `${startValue}: ${todayValue}`,
    };
    var layout2 = {
        dragmode: 'zoom',
        title: `${startValue}: ${todayValue}`,
        xaxis: {
          rangeslider: {
               visible: false
           }
        }
    };
    var config = {responsive: true, displayModeBar: false}
    // plot the chart to div tag
    Plotly.newPlot("plot", data, layout, config);
    Plotly.newPlot("plot2", data2, layout2, config);
    Plotly.newPlot("plot3", data3, layout, config);
    var url = 'images/close/close_VEU_10Y.jpg';
    var url3 = 'images/returns/returns_VEU_10Y.jpg';
    var url4 = 'images/vol_hist/histogram_qqq_symbols_10Y.jpg';
    var url5 = 'images/vol_hist/ked_hist_qqq_symbols_10Y.jpg';
    var url6 = 'images/correlation/scatter_VEU_10Y.jpg';
    $(document).ready(function() {
    $('#close_id').html(`<img src='${url}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#returns_id').html(`<img src='${url3}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#hist_id').html(`<img src='${url4}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#ked_id').html(`<img src='${url5}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#scatter_id').html(`<img src='${url6}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
}

function run1Month() {
    // prevent the page from refreshing
    d3.event.preventDefault();
    
    // create variable for period date
    var todayValue = dates_list[0];
    var dateValue = dates_list[1];

    // select the input element and get the raw HTML node
    var listElement = d3.select("#sel");
    // get the value property of the input element
    var etfValue = listElement.property("value");
    // filter() uses input and date as its argument
    var filteredData = tableData.filter(etf => etf.symbol === etfValue && etf.Date >= dateValue && etf.Date <= todayValue);
    
    // use the map method with the arrow function to return all the filtered week numbers.
    var adj_close = filteredData.map(etf => etf['Adj Close']);
    var close = filteredData.map(etf => etf.Close);
    var dates = filteredData.map(etf => etf.Date);
    var open = filteredData.map(etf => etf.Open);
    var high = filteredData.map(etf => etf.High);
    var low = filteredData.map(etf => etf.Low);
    var volume = filteredData.map(etf => etf.Volume);

    // create traces
    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: 'Close',
        x: dates,
        y: close,
        //fill: 'tonexty',
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
    var trace3 = {
        type: "candlestick",
        x: dates,
        high: high,
        low: low,
        open: open,
        close: close,
        increasing: {line: {color: 'green'}},
        decreasing: {line: {color: 'red'}},
    };
    var trace4 = {
        type: "bar",
        x: dates,
        y: volume,
        marker: {
            color: "rgb(158,202,225)",
            opacity: 0.6,
            line: {
                color: "rgb(8,48,107)",
                width: 0.5
            }
        }
    };
    var data = [trace1, trace2];
    var data2 = [trace3];
    var data3 = [trace4];
    var layout = {
        title: `${etfValue}: 1M, ${todayValue}`,
      };
    var layout2 = {
        dragmode: 'zoom',
        title: `${etfValue}: 1M, ${todayValue}`,
        xaxis: {
          rangeslider: {
               visible: false
           }
        }
    };
    var config = {responsive: true, displayModeBar: false}
    // plot the chart to a div tag
    Plotly.newPlot("plot", data, layout, config);
    Plotly.newPlot("plot2", data2, layout2, config);
    Plotly.newPlot("plot3", data3, layout, config);

    // conditional statement for image selection
    if (etfValue == 'QQQ' || etfValue == 'DIA') {
        var url = 'images/close/close_VEU_1M.jpg';
        var url3 = 'images/returns/returns_VEU_1M.jpg';
        var url4 = 'images/vol_hist/histogram_qqq_symbols_1M.jpg';
        var url5 = 'images/vol_hist/ked_hist_qqq_symbols_1M.jpg';
        var url6 = 'images/correlation/scatter_VEU_1M.jpg';
    }
    else if (etfValue == 'ACWI' || etfValue == 'VEU' || etfValue == 'VSS') {
        var url = 'images/close/close_VSS_1M.jpg';
        var url3 = 'images/returns/returns_VSS_1M.jpg';
        var url4 = 'images/vol_hist/histogram_glob_symbols_1M.jpg';
        var url5 = 'images/vol_hist/ked_hist_glob_symbols_1M.jpg';
        var url6 = 'images/correlation/scatter_VSS_1M.jpg';
    }
    else {
        var url = 'images/close/close_DIA_1M.jpg';
        var url3 = 'images/returns/returns_DIA_1M.jpg';
        var url4 = 'images/vol_hist/histogram_sp_symbols_1M.jpg';
        var url5 = 'images/vol_hist/ked_hist_sp_symbols_1M.jpg';
        var url6 = 'images/correlation/scatter_DIA_1M.jpg';
    }

    // someone online suggests: use jquery's .html() method to append images to html
    $(document).ready(function() {
    $('#close_id').html(`<img src='${url}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#returns_id').html(`<img src='${url3}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#hist_id').html(`<img src='${url4}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#ked_id').html(`<img src='${url5}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#scatter_id').html(`<img src='${url6}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
}

function run3Month() {
    d3.event.preventDefault();
    var listElement = d3.select("#sel");
    var etfValue = listElement.property("value");
    var todayValue = dates_list[0];
    var dateValue = dates_list[2];
    var filteredData = tableData.filter(etf => etf.symbol === etfValue && etf.Date >= dateValue && etf.Date <= todayValue);
    var adj_close = filteredData.map(etf => etf['Adj Close']);
    var close = filteredData.map(etf => etf.Close);
    var dates = filteredData.map(etf => etf.Date);
    var open = filteredData.map(etf => etf.Open);
    var high = filteredData.map(etf => etf.High);
    var low = filteredData.map(etf => etf.Low);
    var volume = filteredData.map(etf => etf.Volume);
    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: 'Close',
        x: dates,
        y: close,
        //fill: 'tozeroy',
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
    var trace3 = {
        type: "candlestick",
        x: dates,
        high: high,
        low: low,
        open: open,
        close: close,
        increasing: {line: {color: 'green'}},
        decreasing: {line: {color: 'red'}},
    };
    var trace4 = {
        type: "bar",
        x: dates,
        y: volume,
        marker: {
            color: "rgb(158,202,225)",
            opacity: 0.6,
            line: {
                color: "rgb(8,48,107)",
                width: 0.5
            }
        }
    };
    var data = [trace1, trace2];
    var data2 = [trace3];
    var data3 = [trace4];
    var layout = {
        title: `${etfValue}: 3M, ${todayValue}`,
      };
    var layout2 = {
        dragmode: 'zoom',
        title: `${etfValue}: 3M, ${todayValue}`,
        xaxis: {
          rangeslider: {
               visible: false
           }
        }
    };
    var config = {responsive: true, displayModeBar: false}
    Plotly.newPlot("plot", data, layout, config);
    Plotly.newPlot("plot2", data2, layout2, config);
    Plotly.newPlot("plot3", data3, layout, config);
    if (etfValue == 'QQQ' || etfValue == 'DIA') {
        var url = 'images/close/close_VEU_3M.jpg';
        var url3 = 'images/returns/returns_VEU_3M.jpg';
        var url4 = 'images/vol_hist/histogram_qqq_symbols_3M.jpg';
        var url5 = 'images/vol_hist/ked_hist_qqq_symbols_3M.jpg';
        var url6 = 'images/correlation/scatter_VEU_3M.jpg';
    }
    else if (etfValue == 'ACWI' || etfValue == 'VEU' || etfValue == 'VSS') {
        var url = 'images/close/close_VSS_3M.jpg';
        var url3 = 'images/returns/returns_VSS_3M.jpg';
        var url4 = 'images/vol_hist/histogram_glob_symbols_3M.jpg';
        var url5 = 'images/vol_hist/ked_hist_glob_symbols_3M.jpg';
        var url6 = 'images/correlation/scatter_VSS_3M.jpg';
    }
    else {
        var url = 'images/close/close_DIA_3M.jpg';
        var url3 = 'images/returns/returns_DIA_3M.jpg';
        var url4 = 'images/vol_hist/histogram_sp_symbols_3M.jpg';
        var url5 = 'images/vol_hist/ked_hist_sp_symbols_3M.jpg';
        var url6 = 'images/correlation/scatter_DIA_3M.jpg';
    }
    $(document).ready(function() {
    $('#close_id').html(`<img src='${url}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#returns_id').html(`<img src='${url3}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#hist_id').html(`<img src='${url4}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#ked_id').html(`<img src='${url5}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#scatter_id').html(`<img src='${url6}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
}

function run6Month() {
    d3.event.preventDefault();
    var listElement = d3.select("#sel");
    var etfValue = listElement.property("value");
    var todayValue = dates_list[0];
    var dateValue = dates_list[3];
    var filteredData = tableData.filter(etf => etf.symbol === etfValue && etf.Date >= dateValue && etf.Date <= todayValue);
    var adj_close = filteredData.map(etf => etf['Adj Close']);
    var close = filteredData.map(etf => etf.Close);
    var dates = filteredData.map(etf => etf.Date);
    var open = filteredData.map(etf => etf.Open);
    var high = filteredData.map(etf => etf.High);
    var low = filteredData.map(etf => etf.Low);
    var volume = filteredData.map(etf => etf.Volume);
    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: 'Close',
        x: dates,
        y: close,
        //fill: 'tozeroy',
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
    var trace3 = {
        type: "candlestick",
        x: dates,
        high: high,
        low: low,
        open: open,
        close: close,
        increasing: {line: {color: 'green'}},
        decreasing: {line: {color: 'red'}},
    };
    var trace4 = {
        type: "bar",
        x: dates,
        y: volume,
        marker: {
            color: "rgb(158,202,225)",
            opacity: 0.6,
            line: {
                color: "rgb(8,48,107)",
                width: 0.5
            }
        }
    };
    var data = [trace1, trace2];
    var data2 = [trace3];
    var data3 = [trace4];
    var layout = {
        title: `${etfValue}: 6M, ${todayValue}`,
      };
    var layout2 = {
        dragmode: 'zoom',
        title: `${etfValue}: 6M, ${todayValue}`,
        xaxis: {
          rangeslider: {
               visible: false
           }
        }
    };
    var config = {responsive: true, displayModeBar: false}
    Plotly.newPlot("plot", data, layout, config);
    Plotly.newPlot("plot2", data2, layout2, config);
    Plotly.newPlot("plot3", data3, layout, config);
    if (etfValue == 'QQQ' || etfValue == 'DIA') {
        var url = 'images/close/close_VEU_6M.jpg';
        var url3 = 'images/returns/returns_VEU_6M.jpg';
        var url4 = 'images/vol_hist/histogram_qqq_symbols_6M.jpg';
        var url5 = 'images/vol_hist/ked_hist_qqq_symbols_6M.jpg';
        var url6 = 'images/correlation/scatter_VEU_6M.jpg';
    }
    else if (etfValue == 'ACWI' || etfValue == 'VEU' || etfValue == 'VSS') {
        var url = 'images/close/close_VSS_6M.jpg';
        var url3 = 'images/returns/returns_VSS_6M.jpg';
        var url4 = 'images/vol_hist/histogram_glob_symbols_6M.jpg';
        var url5 = 'images/vol_hist/ked_hist_glob_symbols_6M.jpg';
        var url6 = 'images/correlation/scatter_VSS_6M.jpg';
    }
    else {
        var url = 'images/close/close_DIA_6M.jpg';
        var url3 = 'images/returns/returns_DIA_6M.jpg';
        var url4 = 'images/vol_hist/histogram_sp_symbols_6M.jpg';
        var url5 = 'images/vol_hist/ked_hist_sp_symbols_6M.jpg';
        var url6 = 'images/correlation/scatter_DIA_6M.jpg';
    }
    $(document).ready(function() {
    $('#close_id').html(`<img src='${url}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#returns_id').html(`<img src='${url3}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#hist_id').html(`<img src='${url4}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#ked_id').html(`<img src='${url5}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#scatter_id').html(`<img src='${url6}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
}

function run1Year() {
    d3.event.preventDefault();
    var listElement = d3.select("#sel");
    var etfValue = listElement.property("value");
    var todayValue = dates_list[0];
    var dateValue = dates_list[4];
    var filteredData = tableData.filter(etf => etf.symbol === etfValue && etf.Date >= dateValue && etf.Date <= todayValue);
    var adj_close = filteredData.map(etf => etf['Adj Close']);
    var close = filteredData.map(etf => etf.Close);
    var dates = filteredData.map(etf => etf.Date);
    var open = filteredData.map(etf => etf.Open);
    var high = filteredData.map(etf => etf.High);
    var low = filteredData.map(etf => etf.Low);
    var volume = filteredData.map(etf => etf.Volume);
    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: 'Close',
        x: dates,
        y: close,
        //fill: 'tozeroy',
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
    var trace3 = {
        type: "candlestick",
        x: dates,
        high: high,
        low: low,
        open: open,
        close: close,
        increasing: {line: {color: 'green'}},
        decreasing: {line: {color: 'red'}},
    };
    var trace4 = {
        type: "bar",
        x: dates,
        y: volume,
        marker: {
            color: "rgb(158,202,225)",
            opacity: 0.6,
            line: {
                color: "rgb(8,48,107)",
                width: 0.5
            }
        }
    };
    var data = [trace1, trace2];
    var data2 = [trace3];
    var data3 = [trace4];
    var layout = {
        title: `${etfValue}: 1Y, ${todayValue}`,
      };
    var layout2 = {
        dragmode: 'zoom',
        title: `${etfValue}: 1Y, ${todayValue}`,
        xaxis: {
          rangeslider: {
               visible: false
           }
        }
    };
    var config = {responsive: true, displayModeBar: false}
    Plotly.newPlot("plot", data, layout, config);
    Plotly.newPlot("plot2", data2, layout2, config);
    Plotly.newPlot("plot3", data3, layout, config);
    if (etfValue == 'QQQ' || etfValue == 'DIA') {
        var url = 'images/close/close_VEU_1Y.jpg';
        var url3 = 'images/returns/returns_VEU_1Y.jpg';
        var url4 = 'images/vol_hist/histogram_qqq_symbols_1Y.jpg';
        var url5 = 'images/vol_hist/ked_hist_qqq_symbols_1Y.jpg';
        var url6 = 'images/correlation/scatter_VEU_1Y.jpg';
    }
    else if (etfValue == 'ACWI' || etfValue == 'VEU' || etfValue == 'VSS') {
        var url = 'images/close/close_VSS_1Y.jpg';
        var url3 = 'images/returns/returns_VSS_1Y.jpg';
        var url4 = 'images/vol_hist/histogram_glob_symbols_1Y.jpg';
        var url5 = 'images/vol_hist/ked_hist_glob_symbols_1Y.jpg';
        var url6 = 'images/correlation/scatter_VSS_1Y.jpg';
    }
    else {
        var url = 'images/close/close_DIA_1Y.jpg';
        var url3 = 'images/returns/returns_DIA_1Y.jpg';
        var url4 = 'images/vol_hist/histogram_sp_symbols_1Y.jpg';
        var url5 = 'images/vol_hist/ked_hist_sp_symbols_1Y.jpg';
        var url6 = 'images/correlation/scatter_DIA_1Y.jpg';
    }
    $(document).ready(function() {
    $('#close_id').html(`<img src='${url}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#returns_id').html(`<img src='${url3}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#hist_id').html(`<img src='${url4}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#ked_id').html(`<img src='${url5}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#scatter_id').html(`<img src='${url6}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
}

function run5Year() {
    d3.event.preventDefault();
    var listElement = d3.select("#sel");
    var etfValue = listElement.property("value");
    var todayValue = dates_list[0];
    var dateValue = dates_list[5];
    var filteredData = tableData.filter(etf => etf.symbol === etfValue && etf.Date >= dateValue && etf.Date <= todayValue);
    var adj_close = filteredData.map(etf => etf['Adj Close']);
    var close = filteredData.map(etf => etf.Close);
    var dates = filteredData.map(etf => etf.Date);
    var open = filteredData.map(etf => etf.Open);
    var high = filteredData.map(etf => etf.High);
    var low = filteredData.map(etf => etf.Low);
    var volume = filteredData.map(etf => etf.Volume);
    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: 'Close',
        x: dates,
        y: close,
        //fill: 'tozeroy',
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
    var trace3 = {
        type: "candlestick",
        x: dates,
        high: high,
        low: low,
        open: open,
        close: close,
        increasing: {line: {color: 'green'}},
        decreasing: {line: {color: 'red'}},
    };
    var trace4 = {
        type: "bar",
        x: dates,
        y: volume,
        marker: {
            color: "rgb(158,202,225)",
            opacity: 0.6,
            line: {
                color: "rgb(8,48,107)",
                width: 0.5
            }
        }
    };
    var data = [trace1, trace2];
    var data2 = [trace3];
    var data3 = [trace4];
    var layout = {
        title: `${etfValue}: 5Y, ${todayValue}`,
      };
    var layout2 = {
        dragmode: 'zoom',
        title: `${etfValue}: 5Y, ${todayValue}`,
        xaxis: {
          rangeslider: {
               visible: false
           }
        }
    };
    var config = {responsive: true, displayModeBar: false}
    Plotly.newPlot("plot", data, layout, config);
    Plotly.newPlot("plot2", data2, layout2, config);
    Plotly.newPlot("plot3", data3, layout, config);
    if (etfValue == 'QQQ' || etfValue == 'DIA') {
        var url = 'images/close/close_VEU_5Y.jpg';
        var url3 = 'images/returns/returns_VEU_5Y.jpg';
        var url4 = 'images/vol_hist/histogram_qqq_symbols_5Y.jpg';
        var url5 = 'images/vol_hist/ked_hist_qqq_symbols_5Y.jpg';
        var url6 = 'images/correlation/scatter_VEU_5Y.jpg';
    }
    else if (etfValue == 'ACWI' || etfValue == 'VEU' || etfValue == 'VSS') {
        var url = 'images/close/close_VSS_5Y.jpg';
        var url3 = 'images/returns/returns_VSS_5Y.jpg';
        var url4 = 'images/vol_hist/histogram_glob_symbols_5Y.jpg';
        var url5 = 'images/vol_hist/ked_hist_glob_symbols_5Y.jpg';
        var url6 = 'images/correlation/scatter_VSS_5Y.jpg';
    }
    else {
        var url = 'images/close/close_DIA_5Y.jpg';
        var url3 = 'images/returns/returns_DIA_5Y.jpg';
        var url4 = 'images/vol_hist/histogram_sp_symbols_5Y.jpg';
        var url5 = 'images/vol_hist/ked_hist_sp_symbols_5Y.jpg';
        var url6 = 'images/correlation/scatter_DIA_5Y.jpg';
    }
    $(document).ready(function() {
    $('#close_id').html(`<img src='${url}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#returns_id').html(`<img src='${url3}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#hist_id').html(`<img src='${url4}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#ked_id').html(`<img src='${url5}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#scatter_id').html(`<img src='${url6}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
}

function run10Year() {
    d3.event.preventDefault();
    var listElement = d3.select("#sel");
    var etfValue = listElement.property("value");
    var todayValue = dates_list[0];
    var dateValue = dates_list[6];
    var filteredData = tableData.filter(etf => etf.symbol === etfValue && etf.Date >= dateValue && etf.Date <= todayValue);
    var adj_close = filteredData.map(etf => etf['Adj Close']);
    var close = filteredData.map(etf => etf.Close);
    var dates = filteredData.map(etf => etf.Date);
    var open = filteredData.map(etf => etf.Open);
    var high = filteredData.map(etf => etf.High);
    var low = filteredData.map(etf => etf.Low);
    var volume = filteredData.map(etf => etf.Volume);
    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: 'Close',
        x: dates,
        y: close,
        //fill: 'tozeroy',
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
    var trace3 = {
        type: "candlestick",
        x: dates,
        high: high,
        low: low,
        open: open,
        close: close,
        increasing: {line: {color: 'green'}},
        decreasing: {line: {color: 'red'}},
    };
    var trace4 = {
        type: "bar",
        x: dates,
        y: volume,
        marker: {
            color: "rgb(158,202,225)",
            opacity: 0.6,
            line: {
                color: "rgb(8,48,107)",
                width: 0.5
            }
        }
    };
    var data = [trace1, trace2];
    var data2 = [trace3];
    var data3 = [trace4];
    var layout = {
        title: `${etfValue}: 10Y, ${todayValue}`,
      };
    var layout2 = {
        dragmode: 'zoom',
        title: `${etfValue}: 10Y, ${todayValue}`,
        xaxis: {
          rangeslider: {
               visible: false
           }
        }
    };
    var config = {responsive: true, displayModeBar: false}
    Plotly.newPlot("plot", data, layout, config);
    Plotly.newPlot("plot2", data2, layout2, config);
    Plotly.newPlot("plot3", data3, layout, config);
    if (etfValue == 'QQQ' || etfValue == 'DIA') {
        var url = 'images/close/close_VEU_10Y.jpg';
        var url3 = 'images/returns/returns_VEU_10Y.jpg';
        var url4 = 'images/vol_hist/histogram_qqq_symbols_10Y.jpg';
        var url5 = 'images/vol_hist/ked_hist_qqq_symbols_10Y.jpg';
        var url6 = 'images/correlation/scatter_VEU_10Y.jpg';
    }
    else if (etfValue == 'ACWI' || etfValue == 'VEU' || etfValue == 'VSS') {
        var url = 'images/close/close_VSS_10Y.jpg';
        var url3 = 'images/returns/returns_VSS_10Y.jpg';
        var url4 = 'images/vol_hist/histogram_glob_symbols_10Y.jpg';
        var url5 = 'images/vol_hist/ked_hist_glob_symbols_10Y.jpg';
        var url6 = 'images/correlation/scatter_VSS_10Y.jpg';
    }
    else {
        var url = 'images/close/close_DIA_10Y.jpg';
        var url3 = 'images/returns/returns_DIA_10Y.jpg';
        var url4 = 'images/vol_hist/histogram_sp_symbols_10Y.jpg';
        var url5 = 'images/vol_hist/ked_hist_sp_symbols_10Y.jpg';
        var url6 = 'images/correlation/scatter_DIA_10Y.jpg';
    }
    $(document).ready(function() {
    $('#close_id').html(`<img src='${url}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#returns_id').html(`<img src='${url3}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#hist_id').html(`<img src='${url4}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#ked_id').html(`<img src='${url5}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#scatter_id').html(`<img src='${url6}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
}

function runMax() {
    d3.event.preventDefault();
    var listElement = d3.select("#sel");
    var etfValue = listElement.property("value");
    var todayValue = dates_list[0];
    var filteredData = tableData.filter(etf => etf.symbol === etfValue);
    var adj_close = filteredData.map(etf => etf['Adj Close']);
    var close = filteredData.map(etf => etf.Close);
    var dates = filteredData.map(etf => etf.Date);
    var open = filteredData.map(etf => etf.Open);
    var high = filteredData.map(etf => etf.High);
    var low = filteredData.map(etf => etf.Low);
    var volume = filteredData.map(etf => etf.Volume);
    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: 'Close',
        x: dates,
        y: close,
        //fill: 'tozeroy',
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
    var trace3 = {
        type: "candlestick",
        x: dates,
        high: high,
        low: low,
        open: open,
        close: close,
        increasing: {line: {color: 'green'}},
        decreasing: {line: {color: 'red'}},
    };
    var trace4 = {
        type: "bar",
        x: dates,
        y: volume,
        marker: {
            color: "rgb(158,202,225)",
            opacity: 0.6,
            line: {
                color: "rgb(8,48,107)",
                width: 0.5
            }
        }
    };
    var data = [trace1, trace2];
    var data2 = [trace3];
    var data3 = [trace4];
    var layout = {
        title: `${etfValue}: ${todayValue}`,
      };
    var layout2 = {
        dragmode: 'zoom',
        title: `${etfValue}: ${todayValue}`,
        xaxis: {
          rangeslider: {
               visible: false
           }
        }
    };
    var config = {responsive: true, displayModeBar: false}
    Plotly.newPlot("plot", data, layout, config);
    Plotly.newPlot("plot2", data2, layout2, config);
    Plotly.newPlot("plot3", data3, layout, config);
    if (etfValue == 'QQQ' || etfValue == 'DIA') {
        var url = 'images/close/close_VEU_10Y.jpg';
        var url3 = 'images/returns/returns_VEU_10Y.jpg';
        var url4 = 'images/vol_hist/histogram_qqq_symbols_10Y.jpg';
        var url5 = 'images/vol_hist/ked_hist_qqq_symbols_10Y.jpg';
        var url6 = 'images/correlation/scatter_VEU_10Y.jpg';
    }
    else if (etfValue == 'ACWI' || etfValue == 'VEU' || etfValue == 'VSS') {
        var url = 'images/close/close_VSS_10Y.jpg';
        var url3 = 'images/returns/returns_VSS_10Y.jpg';
        var url4 = 'images/vol_hist/histogram_glob_symbols_10Y.jpg';
        var url5 = 'images/vol_hist/ked_hist_glob_symbols_10Y.jpg';
        var url6 = 'images/correlation/scatter_VSS_10Y.jpg';
    }
    else {
        var url = 'images/close/close_DIA_10Y.jpg';
        var url3 = 'images/returns/returns_DIA_10Y.jpg';
        var url4 = 'images/vol_hist/histogram_sp_symbols_10Y.jpg';
        var url5 = 'images/vol_hist/ked_hist_sp_symbols_10Y.jpg';
        var url6 = 'images/correlation/scatter_DIA_10Y.jpg';
    }
    $(document).ready(function() {
    $('#close_id').html(`<img src='${url}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#returns_id').html(`<img src='${url3}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#hist_id').html(`<img src='${url4}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#ked_id').html(`<img src='${url5}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
    $(document).ready(function() {
    $('#scatter_id').html(`<img src='${url6}' class="img-responsive rcorners border" style="width:100%" alt="Image">`);
    });
}