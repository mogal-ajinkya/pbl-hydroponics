let tprogressBar = document.querySelector(".temp-circular-progress");
let tvalueContainer = document.querySelector(".temp-value-container");

let tprogressValue = 0;
let tprogressEndValue = 25;
let speed = 1;

let tprogress = setInterval(() => {
  tprogressValue++;
  tvalueContainer.textContent = `${tprogressValue}%`;
  tprogressBar.style.background = `conic-gradient(
      #4d5bf9 ${tprogressValue * 3.6}deg,
      #cadcff ${tprogressValue * 3.6}deg
  )`;
  if (tprogressValue == tprogressEndValue) {
    clearInterval(tprogress);
  }
}, speed);

// for humidity
let hprogressBar = document.querySelector(".humidity-circular-progress");
let hvalueContainer = document.querySelector(".humidity-value-container");

let hprogressValue = 0;
let hprogressEndValue = 90;
// let hspeed = 50;

let hprogress = setInterval(() => {
  hprogressValue++;
  hvalueContainer.textContent = `${hprogressValue}%`;
  hprogressBar.style.background = `conic-gradient(
      #4d5bf9 ${hprogressValue * 3.6}deg,
      #cadcff ${hprogressValue * 3.6}deg
  )`;
  if (hprogressValue == hprogressEndValue) {
    clearInterval(hprogress);
  }
}, speed);

// for ph
let phprogressBar = document.querySelector(".ph-circular-progress");
let phvalueContainer = document.querySelector(".ph-value-container");

let phprogressValue = 0;
let phprogressEndValue = 90;
// let hspeed = 50;

let phprogress = setInterval(() => {
  phprogressValue++;
  phvalueContainer.textContent = `${phprogressValue}%`;
  phprogressBar.style.background = `conic-gradient(
      #4d5bf9 ${phprogressValue * 3.6}deg,
      #cadcff ${phprogressValue * 3.6}deg
  )`;
  if (phprogressValue == phprogressEndValue) {
    clearInterval(phprogress);
  }
}, speed);


// js for graph 

var chartT = new Highcharts.Chart({
    chart:{ renderTo : 'chart-temperature' },
    title: { text: 'BME280 Temperature' },
    series: [{
      showInLegend: false,
      data: [26.02,25.96,26.02,25.96,26.02,26.02,25.96, 26.02,26.02,26.02,26.02,26.02,26.09,26.09,26.09,26.02,26.02,26.02,26.09]
    }],
    plotOptions: {
      line: { animation: false,
        dataLabels: { enabled: true }
      },
      series: { color: '#059e8a' }
    },
    xAxis: { type: 'datetime',
      dateTimeLabelFormats: { second: '%H:%M:%S' }
    },
    yAxis: {
      title: { text: 'Temperature (Celsius)' }
      //title: { text: 'Temperature (Fahrenheit)' }
    },
    credits: { enabled: false }
  });
  setInterval(function ( ) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var x = (new Date()).getTime(),
            y = parseFloat(this.responseText);
        //console.log(this.responseText);
        if(chartT.series[0].data.length > 40) {
          chartT.series[0].addPoint([x, y], true, true, true);
        } else {
          chartT.series[0].addPoint([x, y], true, false, true);
        }
      }
    };
    xhttp.open("GET", "/temperature", true);
    xhttp.send();
  }, 30000 ) ;
  
  var chartH = new Highcharts.Chart({
    chart:{ renderTo:'chart-humidity' },
    title: { text: 'BME280 Humidity' },
    series: [{
      showInLegend: false,
      data: [47 ,55, 50, 58 ,67, 65 ,65 ,65 , 53 , 55 , 62  , 58 ,  58 ,  60 , 61, 59,61, 57,55, 61,  59, 60,60] 
    }],
    plotOptions: {
      line: { animation: false,
        dataLabels: { enabled: true }
      }
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: { second: '%H:%M:%S' }
    },
    yAxis: {
      title: { text: 'Humidity (%)' }
    },
    credits: { enabled: false }
  });
  
  setInterval(function ( ) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var x = (new Date()).getTime(),
            y = parseFloat(this.responseText);
        //console.log(this.responseText);
        if(chartH.series[0].data.length > 40) {
          chartH.series[0].addPoint([x, y], true, true, true);
        } else {
          chartH.series[0].addPoint([x, y], true, false, true);
        }
      }
    };
    xhttp.open("GET", "/humidity", true);
    xhttp.send();
  }, 30000 ) ;
  
  var chartP = new Highcharts.Chart({
    chart:{ renderTo:'chart-pressure' },
    title: { text: 'BME280 Pressure' },
    series: [{
      showInLegend: false,
      data: [26.02,25.96,26.02,25.96,26.02,26.02,25.96, 26.02,26.02,26.02,26.02,26.02,26.09,26.09,26.09,26.02,26.02,26.02,26.09]
    }],
    plotOptions: {
      line: { animation: false,
        dataLabels: { enabled: true }
      },
      series: { color: '#18009c' }
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: { second: '%H:%M:%S' }
    },
    yAxis: {
      title: { text: 'Pressure (hPa)' }
    },
    credits: { enabled: false }
  });
  setInterval(function ( ) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var x = (new Date()).getTime(),
            y = parseFloat(this.responseText);
        //console.log(this.responseText);
        if(chartP.series[0].data.length > 40) {
          chartP.series[0].addPoint([x, y], true, true, true);
        } else {
          chartP.series[0].addPoint([x, y], true, false, true);
        }
      }
    };
    xhttp.open("GET", "/pressure", true);
    xhttp.send();
  }, 30000 ) ;