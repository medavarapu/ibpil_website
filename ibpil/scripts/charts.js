google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
	  google.setOnLoadCallback(drawChart1);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Renewables(MW)',     74],
          ['Gas(MW)',      150],
          ['Coal(MW)',  489],
        ]);

          var options = {
           width: 480,
          height: 340,
          title: 'Projects in operation (MW)',
          is3D: true,
          legend: {position: 'bottom', textStyle: {color: 'black', fontSize: 12}},
          colors:['#99CCFF','#0066CC','#3399FF'],
		  pieSliceText: 'value',
		  pieSliceTextStyle:{color: 'black', fontName: 'Arial', fontSize: 14, bold: true},
          
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }
	  function drawChart1(){
		  var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Operational(MW)',     713],
          ['Under Construction(MW)',      1510],
          ['Under Development(MW)',  1355],
        ]);

       
       var options = {
           width: 480,
          height: 340,
          title: 'Total capacity(MW)',
          is3D: true,
          legend: {position: 'bottom', textStyle: {color: 'black', fontSize: 12}},
          colors:['#3399FF','#0066CC','#99CCFF'],
		  pieSliceText: 'value',
		  pieSliceTextStyle:{color: 'black', fontName: 'Arial', fontSize: 14, bold: true},
          
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d1'));
        chart.draw(data, options);
	  }