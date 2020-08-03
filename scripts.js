 //desativado//

function check()
{
  if(!document.getElementById('email').checkValidity())
  {

  }else
  {
      callShowDiv();
  }
}

function callShowDiv()
{
    document.getElementById('divmensagem').style.display = "block";
}

$(function() {

  $('#login-form-link').click(function(e) {
  $("#login-form").delay(100).fadeIn(100);
   $("#register-form").fadeOut(100);
  $('#register-form-link').removeClass('active');
  $(this).addClass('active');
  e.preventDefault();
});
$('#register-form-link').click(function(e) {
  $("#register-form").delay(100).fadeIn(100);
   $("#login-form").fadeOut(100);
  $('#login-form-link').removeClass('active');
  $(this).addClass('active');
  e.preventDefault();
});

});

$(document).ready(function(){
  
  $('.date').mask('00/00/0000');
  $('.time').mask('00:00:00');
  $('.date_time').mask('00/00/0000 00:00:00');
  $('.cep').mask('00000-000');
  $('.phone').mask('0000-0000');
  $("#telefone").mask("(00) 00000-0000");
  $('.phone_us').mask('(000) 000-0000');
  $('.mixed').mask('AAA 000-S0S');
  $("#cpf").mask("000.000.000-00", {reverse: true});
  $('.cnpj').mask('00.000.000/0000-00', {reverse: true});
  $("#cnpjcpf").mask("00.000.000/0000-00", "000.000.000-00", {reverse: true});
  $("#agencia").mask("0000-0", {reverse: true});
  $("#conta").mask("00000-0", {reverse: true});
  $('.money').mask('000.000.000.000.000,00', {reverse: true});
  $('.money2').mask("#.##0,00", {reverse: true});
  $("#celular").mask("(00) 0000-00009");
  $("#telefono").mask("(00) 0000-00009");

  $("#celular").blur(function(event){
    if ($(this).val().length == 15){
      $("#celular").mask("(00) 00000-0009")
    }else{
      $("#celular").mask("(00) 0000-00009")
    }
  })

  $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
    translation: {
      'Z': {
        pattern: /[0-9]/, optional: true
      }
    }
  });
  $('.ip_address').mask('099.099.099.099');
  $('.percent').mask('##0,00%', {reverse: true});
  $('.clear-if-not-match').mask("00/00/0000", {clearIfNotMatch: true});
  $('.placeholder').mask("00/00/0000", {placeholder: "__/__/____"});
  $('.fallback').mask("00r00r0000", {
      translation: {
        'r': {
          pattern: /[\/]/,
          fallback: '/'
        },
        placeholder: "__/__/____"
      }
    });
  $('.selectonfocus').mask("00/00/0000", {selectOnFocus: true});
});
