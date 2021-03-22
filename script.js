// https://rawgraphs.io

// DATA SET 
 // var d1 = "https://raw.githubusercontent.com/freemanbach/Python/master/python3/covid/worlddata/hungary/hun_test_data_rev.csv";
 //var d1 = "https://raw.githubusercontent.com/freemanbach/itec225/main/financedata/src/aapl/aapl_close_data_rev.csv"
 // var d1 = "https://raw.githubusercontent.com/freemanbach/itec225/main/financedata/src/mrna/mrna_close_data.csv"
var d1 = "https://raw.githubusercontent.com/freemanbach/test1/main/uber_close_data_rev.csv"
	
  Plotly.d3.csv(d1, function(err, rows){
    function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
    }
    
    var t1 = {
      type: "scatter",
      mode: "lines",
      name: 'Uber CLose',
      x: unpack(rows, 'date'),
      y: unpack(rows, 'close'),
      line: {color: '#123456'}
    }
   
    var data = [t1];
    var layout = {
      title: {
        text : 'Custom: Uber Close Price'
      },
      xaxis: {
        title : {
         text : 'Dates' 
        }
      } ,
      yaxis : {
        title : {
          text : 'Close Price'
        }
      }
    };    
    Plotly.newPlot('myplot', data, layout);
  })
