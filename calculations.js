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

  function setOutput(variable, target){
      document.getElementById(target).innerHTML=variable;

  }

  function setInfo(){

    stipend = checkStipend(getInfo('stipend')||0);

    laptop=getLaptop();

    laptopPercentage = getLaptopPercentage();

    percentage=stipendToPercentage(stipend);

    cap=(programFee+stipend+laptop)*2;
    setOutput(cap, 'cap-data');

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
      cap=(programFee+stipend+laptop)*2;
      if (cost>cap){
        cost=cap;
      }
      else if (salary < 50000){
        cost = 0;
      }
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
        x:60000,
        y:calculateY(60000, stipend, laptop, laptopPercentage, percentage)
      },
      // {
      //   x:61000,
      //   y:calculateY(61000, stipend, laptop, laptopPercentage, percentage)
      // },
      // {
      //   x:62000,
      //   y:calculateY(62000, stipend, laptop, laptopPercentage, percentage)
      // },
      // {
      //   x:63000,
      //   y:calculateY(63000, stipend, laptop, laptopPercentage, percentage)
      // },
      // {
      //   x:64000,
      //   y:calculateY(64000, stipend, laptop, laptopPercentage, percentage)
      // // },
      // {
      //   x:65000,
      //   y:calculateY(65000, stipend, laptop, laptopPercentage, percentage)
      // },
      // {
      //   x:66000,
      //   y:calculateY(66000, stipend, laptop, laptopPercentage, percentage)
      // },
      // {
      //   x:67500,
      //   y:calculateY(67500, stipend, laptop, laptopPercentage, percentage)
      // },
      {
        x:70000,
        y:calculateY(70000, stipend, laptop, laptopPercentage, percentage)
      },
      // {
      //   x:72500,
      //   y:calculateY(72500, stipend, laptop, laptopPercentage, percentage)
      // // },
      // {
      //   x: 75000,
      //   y: calculateY(75000, stipend, laptop, laptopPercentage, percentage),
      // },
      // {
      //   x:77500,
      //   y:calculateY(77500, stipend, laptop, laptopPercentage, percentage)
      // },
      {
        x: 80000,
        y: calculateY(80000, stipend, laptop, laptopPercentage, percentage),
      },
      // {
      //   x:82500,
      //   y:calculateY(82500, stipend, laptop, laptopPercentage, percentage)
      // // },
      // {
      //   x:85000,
      //   y:calculateY(85000, stipend, laptop, laptopPercentage, percentage)
      // },
      // {
      //   x:87500,
      //   y:calculateY(87500, stipend, laptop, laptopPercentage, percentage)
      // },
      {
        x: 90000,
        y: calculateY(90000, stipend, laptop, laptopPercentage, percentage),
      },
      // {
      //   x:92500,
      //   y:calculateY(92500, stipend, laptop, laptopPercentage, percentage)
      //  },
      // {
      //   x:95000,
      //   y:calculateY(95000, stipend, laptop, laptopPercentage, percentage)
      // },
      // {
      //   x:97500,
      //   y:calculateY(97500, stipend, laptop, laptopPercentage, percentage)
      // },
      {
        x: 100000,
        y: calculateY(100000, stipend, laptop, laptopPercentage, percentage),
      },
      // {
      //   x:105000,
      //   y:calculateY(105000, stipend, laptop, laptopPercentage, percentage)
      // },
      {
        x:110000,
        y:calculateY(110000, stipend, laptop, laptopPercentage, percentage)
      },
      // {
      //   x:115000,
      //   y:calculateY(115000, stipend, laptop, laptopPercentage, percentage)
      // },
      {
        x:120000,
        y:calculateY(120000, stipend, laptop, laptopPercentage, percentage)
      },
      // {
      //   x: 125000,
      //   y: calculateY(125000, stipend, laptop, laptopPercentage, percentage),
      // },
      {
        x:130000,
        y:calculateY(130000, stipend, laptop, laptopPercentage, percentage)
      },
      // {
      //   x:135000,
      //   y:calculateY(135000, stipend, laptop, laptopPercentage, percentage)
      // },
      {
        x:140000,
        y:calculateY(140000, stipend, laptop, laptopPercentage, percentage)
      },
      // {
      //   x:145000,
      //   y:calculateY(145000, stipend, laptop, laptopPercentage, percentage)
      // },
      {
        x: 150000,
        y: calculateY(150000, stipend, laptop, laptopPercentage, percentage),
      },
      // {
      //   x:155000,
      //   y:calculateY(155000, stipend, laptop, laptopPercentage, percentage)
      // },
      {
        x:160000,
        y:calculateY(160000, stipend, laptop, laptopPercentage, percentage)
      },
      // {
      //   x:165000,
      //   y:calculateY(165000, stipend, laptop, laptopPercentage, percentage)
      // },
      {
        x:170000,
        y:calculateY(170000, stipend, laptop, laptopPercentage, percentage)
      },
      // {
      //   x:18000,
      //   y:calculateY(16000, stipend, laptop, laptopPercentage, percentage)
      // },
      // {
      //   x:19000,
      //   y:calculateY(16000, stipend, laptop, laptopPercentage, percentage)
      // },
      //
      // {
      //   //line smoothing point
      //   x: (cap/(percentage+laptopPercentage+.125)/3)-1,
      //   y: cap,
      // },
      // {
      //   //cap point
      //   x:(cap/(percentage+laptopPercentage+.125)/3),
      //   y:cap,
      // },
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



//EVERYTHING BELOW THIS IS DATA FOR EXPERIMENTING WITH CHART ONLOAD

//
//
//
//
//
// var placeholder={ datasets:[{
//   pointRadius:0,
//   label: "Upfront Cost",
//   xAxisID: "salary",
//   yAxisID: "cost-upfront",
//   data: [
//   //   {
//   //   x: 0,
//   //   y: 29750,
//   // },
//   {
//     x: 25000,
//     y: 29750,
//   },
//   {
//     x: 50000,
//     y: 29750,
//   },
//   {
//     x: 75000,
//     y: 29750,
//   },
//   {
//     x: 100000,
//     y: 29750,
//   },
//   {
//     x: 125000,
//     y: 29750,
//   },
//   {
//     x: 150000,
//     y: 29750,
//   },
//   {
//     x: 175000,
//     y: 29750,
//   },
//   {
//     x: 200000,
//     y: 29750,
//   },
// ]
// }]
// };
//
//  window.onload=function(){
//    var ctx = document.getElementById("canvas").getContext("2d");
//    window.myScatter = Chart.Scatter(ctx, {
//      data: placeholder,
//      options: {
//        responsive: true,
//        hoverMode: "single",
//        title: {
//          display: true,
//          text: "ISA Calculator"
//        },
//        scales: {
//          xAxes: [{
//            ticks:{
//              fixedStepSize:25000,
//              min:25000,
//              max:200000
//            },
//            position: "bottom",
//            id: "salary",
//            scaleLabel:{
//              display:true,
//              labelString:"Starting Salary",
//            },
//            gridLines: {
//              zeroLineColor: "#1AB898"
//            }
//          }],
//          yAxes: [{
//            ticks:{
//              fixedStepSize:15000,
//              min:0,
//              max:100000
//            },
//            type: "linear",
//            display: true,
//            position: "right",
//            id: "cost-upfront",
//            gridLines: {
//              drawOnChartArea: false,
//            },
//          }],
//        }
//      }
//    });
//
//  };
//
//
// $(document).ready( function() {
//   $('#submit-form').click( function() {
//     // setInfo();
//     // stipendToPercentage(stipend);
//     chart();
// });
//   });
