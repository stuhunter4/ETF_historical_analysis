// create all nine charts upon opening page
runStart();

function runStart() {
    
    console.log(etf_qqq);

    // use the map method with the arrow function to return all the dates for the ETF QQQ
    var qqq_dates = etf_qqq.map(data => data["Date"]);
    
    var qqq_closing = etf_qqq.map(data => data["Close"]);
    var qqq_opening = etf_qqq.map(data => data["Open"]);
    var qqq_high = etf_qqq.map(data => data["High"]);
    var qqq_low = etf_qqq.map(data => data["Low"]);

    // create traces
    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: "QQQ",
        x: qqq_dates,
        y: qqq_closing,
        line: {
            color: "#7F7F7F",
            width: 0.35
        }
    };

    var trace2 = {
        type: "candlestick",
        x: qqq_dates,
        high: qqq_high,
        low: qqq_low,
        open: qqq_opening,
        close: qqq_closing
    };


    // create the data arrays for our plots
    var data = [trace1, trace2];

    // define our plot layouts
    var layout = {
        title: "QQQ",
        showlegend: false,
        xaxis: {
            autorange: true,
            title: "Date",
            rangeselector: {
                x: 0,
                y: 1.5,
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

    // repeat all operations for the remaining eight ETF stocks
    var splg_dates = etf_splg.map(data => data["Date"]);
    var splg_closing = etf_splg.map(data => data["Close"]);
    var splg_opening = etf_splg.map(data => data["Open"]);
    var splg_high = etf_splg.map(data => data["High"]);
    var splg_low = etf_splg.map(data => data["Low"]);
    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: "SPLG",
        x: splg_dates,
        y: splg_closing,
        line: {
            color: "#7F7F7F",
            width: 0.35
        }
    };
    var trace2 = {
        type: "candlestick",
        x: splg_dates,
        high: splg_high,
        low: splg_low,
        open: splg_opening,
        close: splg_closing
    };
    var data2 = [trace1, trace2];
    var layout2 = {
        title: "SPLG",
        showlegend: false,
        xaxis: {
            autorange: true,
            title: "Date",
            rangeselector: {
                x: 0,
                y: 1.5,
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
    Plotly.newPlot("plot2", data2, layout2, config);
    var ivv_dates = etf_ivv.map(data => data["Date"]);
    var ivv_closing = etf_ivv.map(data => data["Close"]);
    var ivv_opening = etf_ivv.map(data => data["Open"]);
    var ivv_high = etf_ivv.map(data => data["High"]);
    var ivv_low = etf_ivv.map(data => data["Low"]);
    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: "IVV",
        x: ivv_dates,
        y: ivv_closing,
        line: {
            color: "#7F7F7F",
            width: 0.35
        }
    };
    var trace2 = {
        type: "candlestick",
        x: ivv_dates,
        high: ivv_high,
        low: ivv_low,
        open: ivv_opening,
        close: ivv_closing
    };
    var data3 = [trace1, trace2];
    var layout3 = {
        title: "IVV",
        showlegend: false,
        xaxis: {
            autorange: true,
            title: "Date",
            rangeselector: {
                x: 0,
                y: 1.5,
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
    Plotly.newPlot("plot3", data3, layout3, config);
    var voo_dates = etf_voo.map(data => data["Date"]);
    var voo_closing = etf_voo.map(data => data["Close"]);
    var voo_opening = etf_voo.map(data => data["Open"]);
    var voo_high = etf_voo.map(data => data["High"]);
    var voo_low = etf_voo.map(data => data["Low"]);
    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: "VOO",
        x: voo_dates,
        y: voo_closing,
        line: {
            color: "#7F7F7F",
            width: 0.35
        }
    };
    var trace2 = {
        type: "candlestick",
        x: voo_dates,
        high: voo_high,
        low: voo_low,
        open: voo_opening,
        close: voo_closing
    };
    var data4 = [trace1, trace2];
    var layout4 = {
        title: "VOO",
        showlegend: false,
        xaxis: {
            autorange: true,
            title: "Date",
            rangeselector: {
                x: 0,
                y: 1.5,
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
    Plotly.newPlot("plot4", data4, layout4, config);
    var spy_dates = etf_spy.map(data => data["Date"]);
    var qqq_closing = etf_spy.map(data => data["Close"]);
    var qqq_opening = etf_spy.map(data => data["Open"]);
    var qqq_high = etf_spy.map(data => data["High"]);
    var qqq_low = etf_spy.map(data => data["Low"]);
    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: "SPY",
        x: spy_dates,
        y: qqq_closing,
        line: {
            color: "#7F7F7F",
            width: 0.35
        }
    };
    var trace2 = {
        type: "candlestick",
        x: spy_dates,
        high: qqq_high,
        low: qqq_low,
        open: qqq_opening,
        close: qqq_closing
    };
    var data5 = [trace1, trace2];
    var layout5 = {
        title: "SPY",
        showlegend: false,
        xaxis: {
            autorange: true,
            title: "Date",
            rangeselector: {
                x: 0,
                y: 1.5,
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
    Plotly.newPlot("plot5", data5, layout5, config);
    var qqq_dates = etf_dia.map(data => data["Date"]);
    var qqq_closing = etf_dia.map(data => data["Close"]);
    var qqq_opening = etf_dia.map(data => data["Open"]);
    var qqq_high = etf_dia.map(data => data["High"]);
    var qqq_low = etf_dia.map(data => data["Low"]);
    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: "DIA",
        x: qqq_dates,
        y: qqq_closing,
        line: {
            color: "#7F7F7F",
            width: 0.35
        }
    };
    var trace2 = {
        type: "candlestick",
        x: qqq_dates,
        high: qqq_high,
        low: qqq_low,
        open: qqq_opening,
        close: qqq_closing
    };
    var data6 = [trace1, trace2];
    var layout6 = {
        title: "DIA",
        showlegend: false,
        xaxis: {
            autorange: true,
            title: "Date",
            rangeselector: {
                x: 0,
                y: 1.5,
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
    Plotly.newPlot("plot6", data6, layout6, config);
    var qqq_dates = etf_acwi.map(data => data["Date"]);
    var qqq_closing = etf_acwi.map(data => data["Close"]);
    var qqq_opening = etf_acwi.map(data => data["Open"]);
    var qqq_high = etf_acwi.map(data => data["High"]);
    var qqq_low = etf_acwi.map(data => data["Low"]);
    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: "ACWI",
        x: qqq_dates,
        y: qqq_closing,
        line: {
            color: "#7F7F7F",
            width: 0.35
        }
    };
    var trace2 = {
        type: "candlestick",
        x: qqq_dates,
        high: qqq_high,
        low: qqq_low,
        open: qqq_opening,
        close: qqq_closing
    };
    var data7 = [trace1, trace2];
    var layout7 = {
        title: "ACWI",
        showlegend: false,
        xaxis: {
            autorange: true,
            title: "Date",
            rangeselector: {
                x: 0,
                y: 1.5,
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
    Plotly.newPlot("plot7", data7, layout7, config);
    var qqq_dates = etf_veu.map(data => data["Date"]);
    var qqq_closing = etf_veu.map(data => data["Close"]);
    var qqq_opening = etf_veu.map(data => data["Open"]);
    var qqq_high = etf_veu.map(data => data["High"]);
    var qqq_low = etf_veu.map(data => data["Low"]);
    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: "VEU",
        x: qqq_dates,
        y: qqq_closing,
        line: {
            color: "#7F7F7F",
            width: 0.35
        }
    };
    var trace2 = {
        type: "candlestick",
        x: qqq_dates,
        high: qqq_high,
        low: qqq_low,
        open: qqq_opening,
        close: qqq_closing
    };
    var data8 = [trace1, trace2];
    var layout8 = {
        title: "VEU",
        showlegend: false,
        xaxis: {
            autorange: true,
            title: "Date",
            rangeselector: {
                x: 0,
                y: 1.5,
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
    Plotly.newPlot("plot8", data8, layout8, config);
    var qqq_dates = etf_vss.map(data => data["Date"]);
    var qqq_closing = etf_vss.map(data => data["Close"]);
    var qqq_opening = etf_vss.map(data => data["Open"]);
    var qqq_high = etf_vss.map(data => data["High"]);
    var qqq_low = etf_vss.map(data => data["Low"]);
    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: "VSS",
        x: qqq_dates,
        y: qqq_closing,
        line: {
            color: "#7F7F7F",
            width: 0.35
        }
    };
    var trace2 = {
        type: "candlestick",
        x: qqq_dates,
        high: qqq_high,
        low: qqq_low,
        open: qqq_opening,
        close: qqq_closing
    };
    var data9 = [trace1, trace2];
    var layout9 = {
        title: "VSS",
        showlegend: false,
        xaxis: {
            autorange: true,
            title: "Date",
            rangeselector: {
                x: 0,
                y: 1.5,
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
    Plotly.newPlot("plot9", data9, layout9, config);
};