const ctx = document.getElementById('myChart');
Chart.defaults.font.size = 16;

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
    datasets: [{
      barPercentage: 0.5,
      barThickness: 20,
      data: [0],
      label: 'M3 Semana',
      data: [0],
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {

        labels: {
          // This more specific font property overrides the global property
          font: {
            //size: 26
          }
        }
      },
      tooltip: {
        padding: 4,
        displayColors: false,
        titleFont: {
          size: 1
        },
        bodyFont: {
          size: 11
        },
      }
    }
  }
});


const ctx2 = document.getElementById('myChart2');


new Chart(ctx2, {
  type: 'bar',

  data: {
    labels: ['MR', '2.50', '3.20', '4.0', '5.0', '6.0', '7.0', '8.0', '9.0+'],
    datasets: [{
      label: 'Metros Despachados este Mes',
      data: [0],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      tooltip: {
        padding: 4,
        displayColors: false,
        titleFont: {
          size: 1
        },
        bodyFont: {
          size: 12
        },
      }
    }
  },
});
const ctx5 = document.getElementById('myChart5');

new Chart(ctx5, {
  type: 'bar',

  data: {
    labels: ['24', '26', '28', '30', '32', '34', '36', '38', '40', '42'],
    datasets: [{
      label: 'Esquema de Trozado 3.3 Grueso',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderWidth: 1,
      backgroundColor: '#38C22590'
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
  plugins: {
    legend: {
      labels: {
        // This more specific font property overrides the global property
        font: {
          size: 28
        }
      },
      tooltip: {
        padding: 4,
        displayColors: false,
        titleFont: {
          size: 1
        },
        bodyFont: {
          size: 12
        },
      }
    },
  }
});

const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
  type: 'bar',

  data: {
    labels: ['3.3 D', '3.3 G', '4.0', '6.0', '7.0', '8.0', 'Pulpa'],
    datasets: [{
      label: 'Producción Los LLeuques',
      data: [189.2, 418.0, 467.4, 381.2, 42.6, 64.7, 297],
      borderWidth: 1,
      backgroundColor: '#F1624490'
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
  plugins: {

    tooltip: {
      padding: 4,
      displayColors: false,
      titleFont: {
        size: 1
      },
      bodyFont: {
        size: 12
      },
    }
  }
});
const ctx4 = document.getElementById('myChart4');

new Chart(ctx4, {
  type: 'bar',

  data: {
    labels: ['MR', '2.50', '3.20', '4.0', '5.0', '6.0', '7.0', '8.0', '9.0+'],
    datasets: [{
      label: 'Total Despachos Los Lleuques',
      data: [361.58, 451.74, 1087.41, 1381.74, 307.58, 1558.78, 34.31, 30.76, 34.59],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
  plugins: {
    legend: {
      labels: {
        // This more specific font property overrides the global property
        font: {
          size: 28
        }
      }
    }
  }
});

var ctx6 = document.getElementById("myChartD");
var myChart = new Chart(ctx6, {
  type: 'pie',
  data: {
    labels: ['Km 10'],

    datasets: [{
      label: 'M3 Despachados',
      data: [1],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(0, 206, 86, 0.2)',
        'rgba(255, 0, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(0, 206, 86, 1)',
        'rgba(255, 0, 86, 0.1)',
      ],
      borderWidth: 1
    }]
  },
  options: {
    //cutoutPercentage: 40,
    responsive: false,

    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          boxWidth: 10,
          boxHeight: 10,
          // This more specific font property overrides the global property
          font: {
            //size: 26
          }
        }
      },
      tooltip: {

        displayColors: false,

        titleFont: {
          size: 1
        },
        bodyFont: {
          size: 12
        },
      }
    }
  }
});
var ctx7 = document.getElementById("myChartD2");
var myChart = new Chart(ctx7, {
  type: 'pie',
  data: {
    labels: ['KM 10', 'COLPO', 'RF Lumber', 'Aravena', 'Maihue'],
    datasets: [{
      label: 'Metros Despachados',
      data: [1, 1, 1, 1, 1],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(0, 206, 86, 0.2)',
        'rgba(255, 0, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(0, 206, 86, 1)',
        'rgba(255, 0, 86, 0.1)',

      ],
      borderWidth: 1
    }]
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: 'right',

        labels: {
          boxWidth: 10,
          boxHeight: 10,
          // This more specific font property overrides the global property
          font: {
            size: 12
          }
        }
      },
      tooltip: {

        displayColors: false,

        titleFont: {
          size: 1
        },
        bodyFont: {
          size: 12
        },
      }
    },
    //cutoutPercentage: 40,
    responsive: false,

  }
});
var ctx8 = document.getElementById("myChartD3");
var myChart = new Chart(ctx8, {
  type: 'pie',
  data: {
    labels: ['KM 10', 'COLPO', 'RF Lumber', 'Aravena', 'Cherquenco', 'Maihue'],
    datasets: [{
      label: 'Metros Despachados',
      data: [2068.81, 2149.64, 269.79, 337.53, 43.53, 350.44],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(75, 192, 0, 0.2)',
        'rgba(0, 99, 132, 0.5)',
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(75, 192, 0, 1)',
        'rgba(0, 99, 132, 1)',

      ],
      borderWidth: 1
    }]
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          boxWidth: 10,
          boxHeight: 10,
          // This more specific font property overrides the global property
          font: {
            size: 12
          }
        }
      },
      tooltip: {

        displayColors: false,

        titleFont: {
          size: 1
        },
        bodyFont: {
          size: 12
        },
      }
    },

    //cutoutPercentage: 40,
    responsive: false,

  }
});
var chrt = document.getElementById("chartId").getContext("2d");
var chartId = new Chart(chrt, {
  type: 'line',
  data: {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
    datasets: [{
      label: "Metros Despachados",
      data: [0, 71.42, 114.50, 109.65, 105.50, 0, 0, 0, 0, 110.54, 99.96, 108.36, 108.68, 108.03, 104.45, 110.29, 172.51, 67.13, 62.01, 63.35, 110.18, 0, 97.40, 0, 63.41, 67.31],
      backgroundColor: ['yellow', 'aqua', 'pink', 'lightgreen', 'lightblue', 'gold'],
      borderColor: ['black'],
      borderWidth: 2,
      pointRadius: 5,
    }],
  },
  options: {
    responsive: false,
  },
});