$(document).ready(function(){
  var salary = 0;
  var stipend = 0;
  var raise = 0;

  var getInfo = function (id) {
    var field = document.getElementById(id).value;
    console.log(id);
    return field;
  };

  function getForm(){

    salary = getInfo('salary');
    stipend = getInfo('stipend');
    raise = getInfo('raise');

  };

  $('#submit-form').click( function() {
      getForm();

  });

  //stipend calcuation
  //
  // var stipendCalc = function (stipend) {
  //  max stipend = 13846
  // 1038.45/x = %
  //
  //
  // };

}
)
