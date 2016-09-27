// returns output as a percentage
// var stipend = function (stipend) {
//   var percentage = 0;
//   percentage = (stipend / 1500);
//     console.log( "our calc", ( ( (stipend/1500) *100) ) );
//     console.log( "their calc",( (7.5 * 1000) / 1000) );
//   return percentage;
//
// };
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

  // var laptopCost = function (options) {
  //
  //   return 1%
  // }

}
)
// var getInfo = function (id) {
//   var field = $(id).html();
//   console.log(id);
//   return field;
// };
//
// function getForm(){
//
//   var salary = getInfo('#salary');
//   console.log('salary', salary);
//   localStorage.setItem('ourSalary', salary);
//
//   var stipend = getInfo('#stipend');
//   console.log('stipend', stipend);
//   localStorage.setItem('ourStipend', stipend);
//
//   var raise = getInfo('#raise');
//   console.log('raise', raise);
//   localStorage.setItem('ourRaise', raise);
//
// };
//
// $('#submit-form').click( function() {
//
//     localStorage.clear();
//
//     getForm();
//     console.log(localStorage.getItem('ourSalary') );
//     console.log(localStorage.getItem('ourStipend') );
//     console.log(localStorage.getItem('ourRaise') );
//
// });
//
// // var laptopCost = function (options) {
// //
// //   return 1%
// // }
