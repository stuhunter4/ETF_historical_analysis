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
        var etf_nm = "QQQ";
        var etf_name = "Invesco QQQ";
        var etf_dates = etf_qqq.map(data => data["Date"]);
        var etf_closing = etf_qqq.map(data => data["Close"]);
        var etf_opening = etf_qqq.map(data => data["Open"]);
        var etf_high = etf_qqq.map(data => data["High"]);
        var etf_low = etf_qqq.map(data => data["Low"]);
        var etf_vol = etf_qqq.map(data => data["Volume"]);
        var etf_sum1 = "The Nasdaq 100 is an index of 100 of the largest non-financial companies listed on the Nasdaq stock exchange.";
        var etf_sum2 = "The only ETF meaningfully targeting the Nasdaq 100 is QQQ.";
        var etf_sum3 = "The top three holdings of QQQ are Apple Inc., Microsoft Corp., and Amazon.com Inc., respectively.";
        var etf_source = 'Source:<a href="https://www.investopedia.com/articles/etfs/top-etfs-nasdaq/" target="_blank"> Investopedia &raquo;</a>';
    }
    else if (inputValue == "SPLG") {
        var etf_nm = "SPLG";
        var etf_name = "SPDR Portfolio S&P 500";
        var etf_dates = etf_splg.map(data => data["Date"]);
        var etf_closing = etf_splg.map(data => data["Close"]);
        var etf_opening = etf_splg.map(data => data["Open"]);
        var etf_high = etf_splg.map(data => data["High"]);
        var etf_low = etf_splg.map(data => data["Low"]);
        var etf_vol = etf_splg.map(data => data["Volume"]);
        var etf_sum1 = "The S&P 500 is a market-cap-weighted index of 505 large-cap U.S. stocks.";
        var etf_sum2 = "The S&P 500 ETFs with the lowest fees are SPLG, IVV, and VOO.";
        var etf_sum3 = "Inception Date: November 15, 2005, Issuer: State Street SPDR";
        var etf_source = 'Source:<a href="https://www.investopedia.com/investing/top-sp-500-etfs/" target="_blank"> Investopedia &raquo;</a>';
    }
    else if (inputValue == "IVV") {
        var etf_nm = "IVV";
        var etf_name = "iShares Core S&P 500";
        var etf_dates = etf_ivv.map(data => data["Date"]);
        var etf_closing = etf_ivv.map(data => data["Close"]);
        var etf_opening = etf_ivv.map(data => data["Open"]);
        var etf_high = etf_ivv.map(data => data["High"]);
        var etf_low = etf_ivv.map(data => data["Low"]);
        var etf_vol = etf_ivv.map(data => data["Volume"]);
        var etf_sum1 = "The S&P 500 is a market-cap-weighted index of 505 large-cap U.S. stocks.";
        var etf_sum2 = "The S&P 500 ETFs with the lowest fees are SPLG, IVV, and VOO.";
        var etf_sum3 = "Inception Date: May 15, 2000, Issuer: iShares";
        var etf_source = 'Source:<a href="https://www.investopedia.com/investing/top-sp-500-etfs/" target="_blank"> Investopedia &raquo;</a>';
    }
    else if (inputValue == "VOO") {
        var etf_nm = "VOO";
        var etf_name = "Vanguard S&P 500";
        var etf_dates = etf_voo.map(data => data["Date"]);
        var etf_closing = etf_voo.map(data => data["Close"]);
        var etf_opening = etf_voo.map(data => data["Open"]);
        var etf_high = etf_voo.map(data => data["High"]);
        var etf_low = etf_voo.map(data => data["Low"]);
        var etf_vol = etf_voo.map(data => data["Volume"]);
        var etf_sum1 = "The S&P 500 is a market-cap-weighted index of 505 large-cap U.S. stocks.";
        var etf_sum2 = "The S&P 500 ETFs with the lowest fees are SPLG, IVV, and VOO.";
        var etf_sum3 = "Inception Date: September 9, 2010, Issuer: Vanguard";
        var etf_source = 'Source:<a href="https://www.investopedia.com/investing/top-sp-500-etfs/" target="_blank"> Investopedia &raquo;</a>';
    }
    else if (inputValue == "SPY") {
        var etf_nm = "SPY";
        var etf_name = "SPDR S&P 500";
        var etf_dates = etf_spy.map(data => data["Date"]);
        var etf_closing = etf_spy.map(data => data["Close"]);
        var etf_opening = etf_spy.map(data => data["Open"]);
        var etf_high = etf_spy.map(data => data["High"]);
        var etf_low = etf_spy.map(data => data["Low"]);
        var etf_vol = etf_spy.map(data => data["Volume"]);
        var etf_sum1 = "The S&P 500 is a market-cap-weighted index of 505 large-cap U.S. stocks.";
        var etf_sum2 = "The highest-liquidity ETF is SPY.";
        var etf_sum3 = "Inception Date: January 22, 1993, Issuer: State Street SPDR";
        var etf_source = 'Source:<a href="https://www.investopedia.com/investing/top-sp-500-etfs/" target="_blank"> Investopedia &raquo;</a>';
    }
    else if (inputValue == "DIA") {
        var etf_nm = "DIA";
        var etf_name = "SPDR Dow Jones Industrial Average";
        var etf_dates = etf_dia.map(data => data["Date"]);
        var etf_closing = etf_dia.map(data => data["Close"]);
        var etf_opening = etf_dia.map(data => data["Open"]);
        var etf_high = etf_dia.map(data => data["High"]);
        var etf_low = etf_dia.map(data => data["Low"]);
        var etf_vol = etf_dia.map(data => data["Volume"]);
        var etf_sum1 = "The Dow Jones Industrial Average is a price-weighted index comprised of 30 blue-chip stocks.";
        var etf_sum2 = "DIA is the best (and only) ETF tracking the Dow.";
        var etf_sum3 = "DIA's top holdings include UnitedHealth Group Inc., Goldman Sachs Group Inc., and Home Depot Inc.";
        var etf_source = 'Source:<a href="https://www.investopedia.com/etfs/etfs-track-dow/" target="_blank"> Investopedia &raquo;</a>';
    }
    else if (inputValue == "ACWI") {
        var etf_nm = "ACWI";
        var etf_name = "iShares MSCI ACWI";
        var etf_dates = etf_acwi.map(data => data["Date"]);
        var etf_closing = etf_acwi.map(data => data["Close"]);
        var etf_opening = etf_acwi.map(data => data["Open"]);
        var etf_high = etf_acwi.map(data => data["High"]);
        var etf_low = etf_acwi.map(data => data["Low"]);
        var etf_vol = etf_acwi.map(data => data["Volume"]);
        var etf_sum1 = "Three ETFs for investing globally are ACWI, VEU, and VSS.";
        var etf_sum2 = "The top holdings of these ETFs are Apple Inc., Alibaba Group Holding Ltd., and Kirkland Lake Gold Ltd., respectively.";
        var etf_sum3 = "Inception Date: March 26, 2008, Issuer: iShares";
        var etf_source = 'Source:<a href="https://www.investopedia.com/articles/etfs-mutual-funds/071516/top-3-etfs-tracking-msci-world-index-urth-vt.asp" target="_blank"> Investopedia &raquo;</a>';
    }
    else if (inputValue == "VEU") {
        var etf_nm = "VEU";
        var etf_name = "Vanguard FTSE All World ex US";
        var etf_dates = etf_veu.map(data => data["Date"]);
        var etf_closing = etf_veu.map(data => data["Close"]);
        var etf_opening = etf_veu.map(data => data["Open"]);
        var etf_high = etf_veu.map(data => data["High"]);
        var etf_low = etf_veu.map(data => data["Low"]);
        var etf_vol = etf_veu.map(data => data["Volume"]);
        var etf_sum1 = "Three ETFs for investing globally are ACWI, VEU, and VSS.";
        var etf_sum2 = "The top holdings of these ETFs are Apple Inc., Alibaba Group Holding Ltd., and Kirkland Lake Gold Ltd., respectively.";
        var etf_sum3 = "Inception Date: March 8, 2007, Issuer: Vanguard";
        var etf_source = 'Source:<a href="https://www.investopedia.com/articles/etfs-mutual-funds/071516/top-3-etfs-tracking-msci-world-index-urth-vt.asp" target="_blank"> Investopedia &raquo;</a>';
    }
    else {
        var etf_nm = "VSS";
        var etf_name = "Vanguard FTSE All-World ex-US Small-Cap";
        var etf_dates = etf_vss.map(data => data["Date"]);
        var etf_closing = etf_vss.map(data => data["Close"]);
        var etf_opening = etf_vss.map(data => data["Open"]);
        var etf_high = etf_vss.map(data => data["High"]);
        var etf_low = etf_vss.map(data => data["Low"]);
        var etf_vol = etf_vss.map(data => data["Volume"]);
        var etf_sum1 = "Three ETFs for investing globally are ACWI, VEU, and VSS.";
        var etf_sum2 = "The top holdings of these ETFs are Apple Inc., Alibaba Group Holding Ltd., and Kirkland Lake Gold Ltd., respectively.";
        var etf_sum3 = "Inception Date: April 6, 2009, Issuer: Vanguard";
        var etf_source = 'Source:<a href="https://www.investopedia.com/articles/etfs-mutual-funds/071516/top-3-etfs-tracking-msci-world-index-urth-vt.asp" target="_blank"> Investopedia &raquo;</a>';
    }

    // create traces
    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: etf_nm,
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

    // select the specific well element by id name
    var summary = d3.select("#summary");

    // remove any children from the well
    summary.html("");

    // append selected summary elements to the well
    summary.append("h3").text(etf_name);
    summary.append("p").text(etf_sum1);
    summary.append("p").text(etf_sum2);
    summary.append("p").text(etf_sum3);
    summary.append("p").text(etf_source);

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
    var etf_sum1 = "The Nasdaq 100 is an index of 100 of the largest non-financial companies listed on the Nasdaq stock exchange.";
    var etf_sum2 = "The only ETF meaningfully targeting the Nasdaq 100 is QQQ.";
    var etf_sum3 = "The top three holdings of QQQ are Apple Inc., Microsoft Corp., and Amazon.com Inc., respectively.";
    var etf_source = 'Source:<a href="https://www.investopedia.com/articles/etfs/top-etfs-nasdaq/" target="_blank"> Investopedia &raquo;</a>';
    
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

    // select the specific well element by id name
    var summary = d3.select("#summary");

    // remove any children from the well
    summary.html("");

    // append selected summary elements to the well
    summary.append("h3").text(etf_name);
    summary.append("p").text(etf_sum1);
    summary.append("p").text(etf_sum2);
    summary.append("p").text(etf_sum3);
    summary.append("p").text(etf_source);

};