$(document).ready( function() {

  var stipend = 0;
  var raise;

  var salary = 0;


  function getInfo(id) {
    var field = document.getElementById(id).value;
    return field;
  };

  function getLaptop(id) {
    var haveLaptop = $(id).is(':checked');
    return haveLaptop;
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

    stipend = getInfo('stipend');
    console.log(stipend);
    laptop = getLaptop('laptop');
    console.log(laptop);
    raise = getRadio('raise');
    console.log(raise);
    salary = getRadio('salary');
    console.log(salary);

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
