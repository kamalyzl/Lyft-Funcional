$(document).ready(begin);

function begin() {
  // Llamando elementos del html 
  $name = $('#inputName');
  $last = $('#inputLast');
  $email = $('#inputEmail');
  $checkbox = $('input[type|= \'checkbox\']');
  $buton = $('#buton');


  // Variables verificadoras booleanas
  var verifyName = false;
  var verifyLastName = false;
  var verifyEmail = false;
  var verifycheck = false;

  // Agregamos eventos a nuestros input
  $name.on('keyup focus', function() {
    var input = $name.val();
    var regex = /^[a-zA-Z]*$/;
    if (regex.test(input) && input.length > 3) {
      verifyName = true;
      activeBoton();
    } else {
      desactiveBoton();
    }
  });

  $last.on('keyup focus', function() {
    var input = $last.val();
    var regex = /^[a-zA-Z]*$/;
    if (regex.test(input) && input.length > 3) {
      verifyLastName = true;
      activeBoton();
    } else {
      desactiveBoton();
    }
  });

  $email.on('keyup focus', function() {
    var input = $email.val();
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(input)) {
      verifyEmail = true;
      activeBoton();
    } else {
      desactiveBoton();
    }
  });
  $checkbox.on('click', function() {
    if ($checkbox.prop('checked')) {
      verifycheck = true;
      activeBoton();
    } else {
      desactiveBoton();
    }
  });
  $buton.on('click', function() {
    $name.val('');
    $last.val('');
    $email.val('');
    $checkbox.val('');
    $buton.val('');
    window.location.href = 'final.html';
  });

  function activeBoton() {
    if (verifyName && verifyLastName & verifyEmail & verifycheck) {
      $buton.removeAttr('disabled');
    }
  }

  function desactiveBoton() {
    $buton.prop('disabled', true);
  }
}