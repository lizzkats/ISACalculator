  var monthlyStipend = 0;
  var stipend=0;
  var laptop = 0;
  var laptopPercentage=0;
  var programFee=29750;
  var cap;
  var raise;
  var salary = 45000;
  var percentage = 0;

  function laptopCheck() {
    if(laptop===0){
      laptop=1846;
      laptopPercentage=.01;
    } else {
      laptop=0;
      laptopPercentage=0;
    }
  };

  function checkStipend( value ){
    var parsed = parseInt( value + '' );

    if( isNaN( parsed ) ) {
      $('#error').html('<h3 style="color:red">Stipend must be a number!</h3>');
      return;
    } else if( parsed > 1384.6 || parsed < 0 ) {
      $('#error').html('<h3 style="color:red">Stipend must be between 0 and 1384.</h3>');
      return;
    } else {
      $('#error').html('');
      monthlyStipend=parsed;
      stipend=monthlyStipend*10;
    }
  };

  function getInfo(id) {
    var field = document.getElementById(id).value;
    return field;
  };

  function getRadio(name) {
    radio = document.getElementsByName(name);
    for (var i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
        return radio[i].value;
      };
    };
  };

  function setInfo(){

    checkStipend(getInfo('stipend') || 0);
    console.log(monthlyStipend);

    raise = getRadio('raise');
    // console.log(raise);
    salary = getRadio('salary');
    // console.log(salary);

  };


  function stipendToPercentage(stipend) {
    if(stipend<1){
      percentage=0;
    } else {
      percentage=1038.45/stipend;
    }


    console.log('percentage'+percentage);

  }



  //use inside graph object
  function calculateY(salary) {
      var cost = salary * 3 * (percentage+laptopPercentage+.125);
      console.log('1st-cost '+cost);
      console.log('1st-salary '+salary);
      console.log('1st-percentage '+percentage);
      console.log('1st-laptopPercentage '+laptopPercentage);
      cap=(programFee+stipend+laptop)*2;
      if (cost>cap){
        cost=cap;
      }
      else if (salary < 50000){
        cost = 0;
      }
      console.log('cap '+cap);
      console.log('cost '+cost);
      return cost;
  }


  var chartData={
    datasets:[{
      label: "3 Year ISA Cost",
      xAxisID: "salary",
      yAxisID: "cost-isa",
      data:[{
        x: 49999,
        y: calculateY(49999),
      },
      {
        //curve smoothing point
        x: 50000,
        y: 18749,
      },
      {
        x: 50000,
        y: calculateY(50000),
      },
      {
        x: 75000,
        y: calculateY(75000),
      },
      // {
      //   x: 80000,
      //   y: calculateY(80000),
      // },
      // {
      //   x: 90000,
      //   y: calculateY(90000),
      // },
      {
        x: 100000,
        y: calculateY(100000),
      },
      {
        x: 125000,
        y: calculateY(125000),
      },
      {
        x: 150000,
        y: calculateY(150000),
      },
      {
        //cap point
        x:(cap/(percentage+laptopPercentage+.125)/3),
        y:cap
      },
      {
        //line smoothing point
        x: (cap/(percentage+laptopPercentage+.125)/3)-1,
        y: cap,
      },
      {
        x: 175000,
        y: calculateY(175000),
      },
      {
        x:200000,
        y: calculateY(200000)
      }
      ]
    },
      {
        label: "Upfront Cost",
        xAxisID: "salary",
        yAxisID: "cost-upfront",
        data: [
        //   {
        //   x: 0,
        //   y: 29750,
        // },
        {
          x: 25000,
          y: 29750,
        },
        {
          x: 50000,
          y: 29750,
        },
        {
          x: 75000,
          y: 29750,
        },
        {
          x: 100000,
          y: 29750,
        },
        {
          x: 125000,
          y: 29750,
        },
        {
          x: 150000,
          y: 29750,
        },
        {
          x: 175000,
          y: 29750,
        },
        {
          x: 200000,
          y: 29750,
        },
      ]
      }]
  };

  var options = {
    responsive: true,
    hoverMode: "single",
    title: {
      display: true,
      text: "ISA Calculator"
    },
    scales: {
      xAxes: [{
        ticks:{
          fixedStepSize:25000,
          min:25000,
          max:200000
        },
        position: "bottom",
        id: "salary",
        scaleLabel:{
          display:true,
          labelString:"Starting Salary",
        },
        gridLines: {
          zeroLineColor: "#1AB898"
        }
      }],
      yAxes: [{
        ticks:{
          fixedStepSize:15000,
          min:0,
          max:75000
        },
        scaleLabel:{
          display:false,
          labelString:"Total Cost",
        },
        type: "linear",
        display: true,
        position: "left",
        id: "cost-isa"
      }, {
        ticks:{
          fixedStepSize:15000,
          min:0,
          max:75000
        },
        type: "linear",
        display: true,
        position: "right",
        id: "cost-upfront",
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    }
  };
$.each(chartData.datasets, function(i, dataset) {
    dataset.borderColor = "lightgrey";
    // dataset.backgroundColor = "blue";
    dataset.pointBorderColor = "pink";
    dataset.pointBackgroundColor = "orange";
    dataset.pointBorderWidth = 1;
});

 function chart() {
   var ctx = document.getElementById("canvas").getContext("2d");
   window.myScatter = Chart.Scatter(ctx, {
     data: chartData,
     options: options
   })
 }


$(document).ready( function() {
  $('#submit-form').click( function() {
    setInfo();
    stipendToPercentage(stipend);
    chart();
});
  });
