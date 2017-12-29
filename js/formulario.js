$(document).ready(begin);

// Llamando elementos del html 
$name = $('#inputName');
$last = $('#inputLast');
$email = $('#inputEmail');
$checkbox = $("input[type|= 'checkbox']");
$buton = $('#buton');


//Variables verificadoras booleanas
var verifyName = false;
var verifyLastName = false;
var verifyEmail = false;
var verifycheck = false;

function begin() {

  //Agregamos eventos a nuestros input
  $name.on('keyup focus', function () {
    var input = $name.val();
    var RegExp = /^[a-zA-Z\s]*$/;
    if (RegExp.test(input)) {
      verifyName = true;
      $buton.removeAttr('disabled');
    }
    desactiveBoton();

  });

  $last.on('keyup focus', function () {
    var input = $last.val();
    var RegExp = /^[a-zA-Z\s]*$/;
    if (RegExp.test(input)) {
      verifyLastName = true;
      activeBoton();
    }
    desactiveBoton();

  });

  $email.on('keyup focus', function () {
    var input = $email.val();
    var RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (RegExp.test(input)) {
      verifyEmail = true;
      activeBoton();
    }
    desactiveBoton();
  });
  $checkbox.on('click', function () {
    if ($checkbox.prop("checked")) {
      verifycheck = true;
      activeBoton();
    }
    desactiveBoton();

  });

  function activeBoton() {
    if (verifycheck) {
      // $buton.prop('disabled', false);
      $buton.removeAttr('disabled');
    }
  }

  function desactiveBoton() {
    $buton.prop('disabled', true);
  }

}