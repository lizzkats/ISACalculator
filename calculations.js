  var monthlyStipend = 0;
  var stipend=0;
  var laptop = 0;
  var laptopPercentage=0;
  var programFee=29750;
  var cap;
  var raise;
  var salary = 45000;
  var percentage = 0;


  function getLaptop() {
  var  laptop=  document.getElementById('laptop').checked;
   console.log('laptop check is '+laptop);
   if(laptop){
     laptop=1846;
   } else {
     laptop=0;
   }
   return laptop;
  }

  function getLaptopPercentage() {
    var laptopPercentage=  document.getElementById('laptop').checked;
    console.log('laptop check is '+laptop);
    if(laptop){
      laptopPercentage=.01;
    } else {
      laptopPercentage=0;
    }
    return laptopPercentage;
  }

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
    var  monthlyStipend=parsed;
    var  stipend=monthlyStipend*10;
    }
    return stipend;
  };

  function getInfo(id) {
    var field=document.getElementById(id).value;

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

    stipend = checkStipend(getInfo('stipend'));

    laptop=getLaptop();

    laptopPercentage = getLaptopPercentage();

    percentage=stipendToPercentage(stipend);

    cap=(programFee+stipend+laptop)*2;


    raise = getRadio('raise');
    // console.log(raise);
    salary = getRadio('salary');
    // console.log(salary);
    return generateData(stipend, laptop, laptopPercentage, percentage, cap);
  };


  function stipendToPercentage(stipend) {
    if(stipend<1){
      percentage=0;
    } else {
      percentage=1038.45/stipend;
    }

    return percentage;
  }



  //use inside graph object
  function calculateY(salary, stipend, laptop, laptopPercentage, percentage) {

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

function generateData(stipend, laptop, laptopPercentage, percentage, cap){
  var chartData={
    datasets:[{

        pointRadius:0,
      label: "3 Year ISA Cost",
      xAxisID: "salary",
      yAxisID: "cost-isa",
      data:[{
        x: 49999,
        y: calculateY(49999, stipend, laptop, laptopPercentage, percentage),
      },
      {
        //line smoothing point
        x: 50000,
        y: calculateY(50000, stipend, laptop, laptopPercentage, percentage)-1,
      },
      {
        x: 50000,
        y: calculateY(50000, stipend, laptop, laptopPercentage, percentage),
      },
      {
        x: 75000,
        y: calculateY(75000, stipend, laptop, laptopPercentage, percentage),
      },
      {
        x: 80000,
        y: calculateY(80000, stipend, laptop, laptopPercentage, percentage),
      },
      {
        x: 90000,
        y: calculateY(90000, stipend, laptop, laptopPercentage, percentage),
      },
      {
        x: 100000,
        y: calculateY(100000, stipend, laptop, laptopPercentage, percentage),
      },
      {
        x: 125000,
        y: calculateY(125000, stipend, laptop, laptopPercentage, percentage),
      },
      {
        x: 150000,
        y: calculateY(150000, stipend, laptop, laptopPercentage, percentage),
      },
      {
        //line smoothing point
        x: (cap/(percentage+laptopPercentage+.125)/3)-1,
        y: cap,
      },
      {
        //cap point
        x:(cap/(percentage+laptopPercentage+.125)/3),
        y:cap,
      },
      {
        x: 175000,
        y: calculateY(175000, stipend, laptop, laptopPercentage, percentage),
      },
      {
        x:200000,
        y: calculateY(200000, stipend, laptop, laptopPercentage, percentage),
      }
      ]
    },
      {
        pointRadius:0,
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

  chart(chartData);

}
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
          max:100000
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
          max:100000
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

 function chart(data) {
   var ctx = document.getElementById("canvas").getContext("2d");
   window.myScatter = Chart.Scatter(ctx, {
     data: data,
     options: options
   })
 }
//
//
// $(document).ready( function() {
//   $('#submit-form').click( function() {
//     // setInfo();
//     // stipendToPercentage(stipend);
//     chart();
// });
//   });
