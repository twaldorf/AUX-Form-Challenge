//This is super not my code, but I do understand it and can step through it.
//Would like to do a much deeper dive at some point.
$(function() {
  $('#card-number').validateCreditCard(function(result) {
    if(result.card_type == null) {
      $('#card-number').children().removeClass();
    } else {
      $('#' + result.card_type.name).addClass(result.card_type.name);
    }
    if(!result.valid) {
      $('#card-number').removeClass("valid");
    } else {
      $('#card-number').addClass("valid");
    }
  });
});
