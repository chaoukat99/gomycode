
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Ville', 'Population'],
          ['Product 1',     10],
          ['Product2',      12],
          ['profuct3',  7],
        
        ]);

        var options = {
          title: 'Les Villes Du maroc'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
 