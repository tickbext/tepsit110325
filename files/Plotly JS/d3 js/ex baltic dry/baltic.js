
function crea() {
    Plotly.d3.csv("https://raw.githubusercontent.com/ajoposor/Baltic-Dry-Index/master/Old%20Data%20-%20Baltic%20Dry%20Index.csv",
    function(data){ 
        leggiDati(data) 
    });
  
};
    
function leggiDati(righe) {
    var x = [], y = []
  
    for (var i=0; i<righe.length; i++) {
      row = righe[i]
      x.push( row['x'] )
      y.push( row['y'] )
    }

    creaGrafico( x, y);
}
  
function creaGrafico( x, y){
    var dati = [{
      x: x, 
      y: y,
      mode: "lines",
      name: "Baltic Dry Index",
      line: {
              color: "red",
              width:0.5
            }
    }];
    
    var layout = {
      showlegend: true,
      yaxis: {range: [0, 12000]},
      paper_bgcolor: "rgb(247,247,202)",
      plot_bgcolor: "rgb(209,247,196)",
      title: "indice andamento costi trasporto marittimo 1985-2013"
    };
  
    Plotly.newPlot('plot', dati, layout);
}