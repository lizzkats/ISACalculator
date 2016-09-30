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
   if(laptop){
     laptop=1846;
   } else {
     laptop=0;
   }
   return laptop;
  }

  function getLaptopPercentage() {
    var laptopPercentage=  document.getElementById('laptop').checked;
    if(laptop){
      laptopPercentage=.01;
    } else {
      laptopPercentage=0;
    }
    return laptopPercentage;
  }

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
    setOutput((stipend/10),'monthly-stipend-output');
    laptop=getLaptop();
    setOutput(laptop,'laptop-output')
    setOutput(stipend+laptop,'total-stipend-output');


    laptopPercentage = getLaptopPercentage();
    percentage=stipendToPercentage(stipend);
    setOutput(((laptopPercentage+percentage+.125)*100)+'%','isa-output');

    cap=(programFee+stipend+laptop)*2;
    setOutput(cap, 'cap-output');

    raise = parseInt(getRadio('raise'), 10);

    salary = parseInt(getRadio('salary'), 10);

    setOutput(calculateY(salary, stipend, laptop, laptopPercentage, percentage, raise),'total-output')


    return generateData(stipend, laptop, laptopPercentage, percentage, raise, salary, cap);
  };


  function stipendToPercentage(stipend) {
    if(stipend<1){
      percentage=0;
    } else {
      percentage=1038.45/stipend;
    }

    return percentage;
  }

  function resetButton(){
      location.reload();


  }


  //use inside graph object
  function calculateY(salary, stipend, laptop, laptopPercentage, percentage, raise) {
      var cost=0;
      var year2=salary+(salary*raise);
      if(raise===0){
      cost = salary *3 * (percentage+laptopPercentage+.125);
    } else {
      cost = (salary + year2 + (year2+(year2*raise))) * (percentage+laptopPercentage+.125);
    }

      cap=(programFee+stipend+laptop)*2;
      if (cost>cap){
        cost=cap;
      }
      else if (salary < 50000){
        cost = 0;
      }
      return cost;
  }

function generateData(stipend, laptop, laptopPercentage, percentage, raise, salary, cap){
  var chartData={
    datasets:[{

        pointRadius:0,
      label: "3 Year ISA Cost",
      xAxisID: "salary",
      yAxisID: "cost-isa",
      data:[{
        x: 49999,
        y: calculateY(49999, stipend, laptop, laptopPercentage, percentage, raise),
      },
      {
        //line smoothing point
        x: 50000,
        y: calculateY(50000, stipend, laptop, laptopPercentage, percentage, raise)-1,
      },
      {
        x: 50000,
        y: calculateY(50000, stipend, laptop, laptopPercentage, percentage, raise),
      },
      {
        x:60000,
        y:calculateY(60000, stipend, laptop, laptopPercentage, percentage, raise)
      },
      {
        x:70000,
        y:calculateY(70000, stipend, laptop, laptopPercentage, percentage, raise)
      },
      {
        x: 80000,
        y: calculateY(80000, stipend, laptop, laptopPercentage, percentage, raise),
      },
      {
        x: 90000,
        y: calculateY(90000, stipend, laptop, laptopPercentage, percentage, raise),
      },
      {
        x: 100000,
        y: calculateY(100000, stipend, laptop, laptopPercentage, percentage, raise),
      },
      {
        x:110000,
        y:calculateY(110000, stipend, laptop, laptopPercentage, percentage, raise)
      },
      {
        x:120000,
        y:calculateY(120000, stipend, laptop, laptopPercentage, percentage, raise)
      },
      {
        x:130000,
        y:calculateY(130000, stipend, laptop, laptopPercentage, percentage, raise)
      },
      {
        x:140000,
        y:calculateY(140000, stipend, laptop, laptopPercentage, percentage, raise)
      },
      {
        x: 150000,
        y: calculateY(150000, stipend, laptop, laptopPercentage, percentage, raise),
      },
      {
        x:160000,
        y:calculateY(160000, stipend, laptop, laptopPercentage, percentage, raise)
      },
      {
        x:170000,
        y:calculateY(170000, stipend, laptop, laptopPercentage, percentage, raise)
      },
      {
        x: 175000,
        y: calculateY(175000, stipend, laptop, laptopPercentage, percentage, raise),
      },
      {
        x:200000,
        y: calculateY(200000, stipend, laptop, laptopPercentage, percentage, raise),
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
      text: "Cost of Program Based on Starting Salary"
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
    dataset.backgroundColor = "blue";
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
