  var stipend = 0;
  var laptop = 0;
  var raise;
  var salary;

  function laptopCheck() {
    if(laptop===0){
      laptop=1846;
    } else {
      laptop=0;
    }
  };

  function checkStipend( value ){
    var parsed = parseInt( value + '' )

    if( isNaN( parsed ) ) {
      $('#error').html('<h3 style="color:red">Stipend must be a number!</h3>');
    }
    if( parsed > 1384 ) {
      $('#error').html('<h3 style="color:red">Stipend max is 1384.</h3>');
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

    stipend = getInfo('stipend')|| 0;
    console.log(typeof parseFloat(stipend));
    checkStipend(stipend);

    raise = getRadio('raise');
    // console.log(raise);
    salary = getRadio('salary');
    // console.log(salary);

  };




$(document).ready( function() {
  $('#submit-form').click( function() {
    setInfo();
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
