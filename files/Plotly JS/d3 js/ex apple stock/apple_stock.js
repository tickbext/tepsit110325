function crea() {
    Plotly.d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/2014_apple_stock.csv",
    function(data){ 
        leggiDati(data) 
    });
  
};
    
function leggiDati(righe) {
    var x = [], y = []
  
    for (var i=0; i<righe.length; i++) {
      row = righe[i]
      x.push( row['AAPL_x'] )
      y.push( row['AAPL_y'] )
    }

    creaGrafico( x, y);
}
  
function creaGrafico( x, y){
    var dati = [{
      x: x, 
      y: y
    }];
  
    Plotly.newPlot('plot', dati, {title: 'Titoli Apple - anno 2014'});
};

  