/**
 * chart for index
 */

const options = {
  chart: {
    height: "360px",
    maxWidth: "100%",
    type: "area",
    fontFamily: "Inter, sans-serif",     
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  legend:{
      show: true,
      position: 'top',
      horizontalAlign: 'right',
      showForSingleSeries: true
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.35,
      opacityTo: 0,
      // shade: "#1C64F2",
      // gradientToColors: ["#1C64F2"],
    },
  },   
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 3,
  },
  grid: {
    show: true,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: 0
    },
  },
  series: [
    {
      name: "Chat Masuk",
      data: [200, 50, 420, 250, 150, 140],
      color: "#22c55e",
    },
    {
      name: "Auto Response",
      data: [300, 150, 450, 300, 200, 250],
      color: "#3b82f6",
    },
    {
      name: "Auto Follow Up",
      data: [350, 175, 325, 330, 260, 280],
      color: "#f43f5e",
    },
    {
      name: "Broadcast",
      data: [350, 400, 480, 460, 480, 350],
      color: "#f97316",
    },
  ],
  xaxis: {
    categories: ['01/02/2024', '02/02/2024', '03/02/2024', '04/02/2024', '05/02/2024', '07/02/2024', '08/02/2024'],
    labels: {
      show: true,
    },
    axisBorder: {
      show: true,
    },
    axisTicks: {
      show: true,
    },
  },
  yaxis: {
    show: true,
    min: 0,
    max: 500,
    stepSize: 100,
    labels:{
      show: true,
      align: 'right'
    }
  },    
}

if (document.getElementById("chart-data") && typeof ApexCharts !== 'undefined') {
  const chart = new ApexCharts(document.getElementById("chart-data"), options);
  chart.render();
}

/** end chart of index */

var chartData = [
  {series: [20], fill:'#7e22ce', label: 'Dalam pengiriman'},
  {series: [35], fill:'#ea580c', label: 'Kiriman Bermasalah'},
  {series: [45], fill:'#facc15', label: 'Resi Stuck'},
  {series: [15], fill:'#22c55e', label: 'Kiriman Berhasil'},
  {series: [40], fill:'#dc2626', label: 'Kiriman Return'},
  {series: [75], fill:'#1d4ed8', label: 'Total Kiriman'}
];

chartData.forEach((data, index) => {

  var radialOptions = {
    chart: {
      type: 'radialBar',
      height: 120,
    },
    fill: {
      colors: data.fill
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '35%',
        },
        dataLabels: {
          show: true,       
          value: {
            show: true,
            fontSize: '12px',
            fontFamily: undefined,
            fontWeight: 400,
            color: undefined,
            offsetY: -10,
            formatter: function (val) {
              return data.series[0] + '%';
            }
          },
          style: {
            fontSize: '14px', // Set font size directly using style object
          }
        }
      },
    },
    series: data.series,
    labels: [''],
  };
  
  var chartRadial = new ApexCharts(document.querySelector("#chart" + (index + 1)), radialOptions);
  chartRadial.render();

});

/**
 * Chart for status delivery
 */
const optionsDelivery = {
  chart: {
    height: "360px",
    maxWidth: "100%",
    type: "area",
    fontFamily: "Inter, sans-serif",     
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  legend:{
      show: true,
      position: 'top',
      horizontalAlign: 'right',
      showForSingleSeries: true
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.35,
      opacityTo: 0,
      // shade: "#1C64F2",
      // gradientToColors: ["#1C64F2"],
    },
  },   
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 3,
  },
  grid: {
    show: true,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: 0
    },
  },
  series: [
    {
      name: "Dalam Pengiriman",
      data: [200, 50, 420, 250, 150, 140],
      color: "#7e22ce",
    },
    {
      name: "Kiriman Bermasalah",
      data: [300, 150, 450, 300, 200, 250],
      color: "#ea580c",
    },
    {
      name: "Resi Stuck",
      data: [350, 175, 325, 330, 260, 280],
      color: "#facc15",
    },
    {
      name: "Kiriman Berhasil",
      data: [310, 165, 475, 325, 225, 265],
      color: "#22c55e",
    },
    {
      name: "Kiriman Return",
      data: [350, 400, 480, 460, 480, 350],
      color: "#dc2626",
    },
    {
      name: "Total Kiriman",
      data: [300, 150, 450, 300, 200, 250],
      color: "#1d4ed8",
    },
  ],
  xaxis: {
    categories: ['01/02/2024', '02/02/2024', '03/02/2024', '04/02/2024', '05/02/2024', '07/02/2024', '08/02/2024'],
    labels: {
      show: true,
    },
    axisBorder: {
      show: true,
    },
    axisTicks: {
      show: true,
    },
  },
  yaxis: {
    show: true,
    min: 0,
    max: 500,
    stepSize: 100,
    labels:{
      show: true,
      align: 'right'
    }
  },    
}

if (document.getElementById("chart-delivery") && typeof ApexCharts !== 'undefined') {
  const chart = new ApexCharts(document.getElementById("chart-delivery"), optionsDelivery);
  chart.render();
}


/**
 * Chart for incoming message
 */

/**
 * Chart for status delivery
 */
const optionsIncomingMessage = {
  chart: {
    height: "124px",
    width: '100%',
    maxWidth: "100%",
    type: "area",
    fontFamily: "Inter, sans-serif",     
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  legend:{
      show: true,
      position: 'top',
      horizontalAlign: 'right',
      showForSingleSeries: true
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.35,
      opacityTo: 0,
      // shade: "#1C64F2",
      // gradientToColors: ["#1C64F2"],
    },
  },   
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 3,
  },
  grid: {
    show: true,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: 0
    },
  },
  series: [    
    {
      name: "Kiriman Berhasil",
      data: [310, 165, 475, 325, 225, 265],
      color: "#22c55e",
    },
  ],
  xaxis: {
    categories: ['01/02/2024', '02/02/2024', '03/02/2024', '04/02/2024', '05/02/2024', '07/02/2024', '08/02/2024'],
    labels: {
      show: false,
    },
    axisBorder: {
      show: true,
    },
    axisTicks: {
      show: true,
    },
  },
  yaxis: {
    show: true,
    min: 0,
    max: 500,
    stepSize: 100,
    labels:{
      show: true,
      align: 'right'
    }
  },    
}

if (document.getElementById("chart-incoming") && typeof ApexCharts !== 'undefined') {
  const chart = new ApexCharts(document.getElementById("chart-incoming"), optionsIncomingMessage);
  chart.render();
}

