$(document).ready(function(){

  var stipend = 0;

  var raise = 0;
  var salary = 0;


  var getInfo = function (id) {
    var field = document.getElementById(id).value;
    return field;
  };

  var getLaptop = function (id){
    var haveLaptop = $(id).is(':checked')
  };

  function setInfo(){

    stipend = getInfo('stipend');
    laptop = getLaptop('laptop');
    console.log('laptop', laptop)

    raise = getInfo('raise');
    salary = getInfo('salary');
      console.log('salary', salary)


  };

  $('#submit-form').click( function() {
    setInfo();

  });

  //stipend calcuation
  //
  // var stipendCalc = function (stipend) {
  //  max stipend = 13846
  // 1038.45/x = %
  //
  //
  // };

})
