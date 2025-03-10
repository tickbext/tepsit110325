function crea(){
  var punti = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    marker: {
      color: 'rgb(219, 64, 82)',
      size: 12
    },
    name: "punti"
  };

  var linee = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'lines',
    line: {
      color: 'rgb(55, 128, 191)',
      width: 3
    },
    name:"linee"
  };

  var entrambi = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: 'lines+markers',
    marker: {
      color: 'rgb(128, 0, 128)',
      size: 8
    },
    line: {
      color: 'rgb(128, 0, 128)',
      width: 1
    },
    name:"entrambi"
  };

  var data = [punti, linee, entrambi];

  var layout = {
    title: 'Stile di linee e punti'
  };

  Plotly.newPlot('plot', data, layout);
}