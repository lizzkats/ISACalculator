  var monthlyStipend = 0;
  var stipend=0;
  var laptop = 0;
  var laptopPercentage=0;
  var programFee=29750;
  var cap;
  var raise;
  var salary;
  var percentage;

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
//use inside graph object
  function calculateY(salary) {
    var cost = salary * 3 * (percentage+laptopPercentage+.125);
    cap=(programFee+stipend+laptop)*2;
    if (cost>cap){
      cost=cap;
    }
    console.log('cap '+cap);
    console.log('cost '+cost);
    return cost;
  }

  function stipendToPercentage(stipend) {
    if(stipend<1){
      percentage=0;
    } else {
      percentage=1038.45/stipend;
    }


    console.log('percentage '+percentage);
  }




$(document).ready( function() {
  $('#submit-form').click( function() {
    setInfo();
    stipendToPercentage(stipend);
});
  });

  //stipend calcuation
  //
  // var stipendCalc = function (stipend) {
  //  max stipend = 13846
  // 1038.45/x = %
  //
  //
  // };
