function crea(){

    var dati = [{
      x: [1, 2, 3, 4, 5],
      y: [6, 8, 7, 8, 6],
      mode: 'lines+markers',
      name: 'onde',
      text: ['A', 'B', 'C', 'D', 'E'],
      line: {
              shape: 'spline',
            },
    }];
  
    var layout = {
      showlegend: true,
      paper_bgcolor: "rgb(247,247,202)",
      plot_bgcolor: "rgb(209,247,196)",
      title: "Esempio di spline"
    };  
  
  Plotly.newPlot('plot', dati, layout);
  
}