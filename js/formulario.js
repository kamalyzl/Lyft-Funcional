$(document).ready(begin);

function begin() {

  // Llamando elementos del html 
  $name = $('#inputName');
  $last = $('#inputLast');
  $email = $('#inputEmail');
  $checkbox = $("input[type|= 'checkbox']");
  $buton = $('#buton');

  $name.on('keyup', firstName);
  $last.on('keyup', lastName);
  $email.on('keyup', email);
  $checkbox.on('click', checkbox);

  function firstName() {
    var input = $name.val();
    var RegExp = /^[a-zA-Z\s]*$/;
    return RegExp.test(input);

  }

  function lastName() {
    var input = $last.val();
    var RegExp = /^[a-zA-Z\s]*$/;
    return RegExp.test(input);

  }

  function email() {
    var input = $email.val();
    var RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return RegExp.test(input);

  }

  function checkbox() {
    return $checkbox.prop("checked");
  }


  function confirm() {
    console.log(firstName() == true);

  }

  // function confirm() {
  //   var centinel = false; debugger
  //   if ((firstName() & lastName() & email()) == 1) {
  //     centinel = true
  //   } console.log(centinel);

  // }

  // function activButon() {
  //   if (confirm())
  //   $buton.removeClass().addClass('butoon');

  //   // $buton.removeClass().addClass('butoon').prop('disabled', !confirm());

  // }


}



// function begin() {
//   // ocultamos todos los span
//   $('form p span').hide();

//   var $usernameInput = $('#username');
//   var $passwordInput = $('#password');
//   var $confirmPasswordInput = $('#confirm_password');
//   var $submit = $('#submit');

//   function isUsernameValid() {
//     return $usernameInput.val().length >= 3;
//   }

//   function isPasswordValid() {
//     return $passwordInput.val().length >= 6;
//   }

//   function arePasswordsMaching() {
//     return $passwordInput.val() === $confirmPasswordInput.val();
//   }

//   function usernameEvent() {
//     var centinel = false;

//     if (isUsernameValid())
//       centinel = $usernameInput.next().hide();
//     else
//       centinel = $usernameInput.next().show();
//     return centinel;
//   }

//   function passwordEvent() {
//     var centinel = false;

//     if (isPasswordValid())
//       centinel = $passwordInput.next().hide();
//     else
//       centinel = $passwordInput.next().show();

//     return centinel;
//   }

//   function confirmPasswordEvent() {
//     var centinel = false;

//     if (arePasswordsMaching())
//       centinel = $confirmPasswordInput.next().hide();
//     else
//       centinel = $confirmPasswordInput.next().show();

//     return centinel;
//   }

//   function areAllValidationsPassing() {  
//     return isUsernameValid() && isPasswordValid() && arePasswordsMaching();
//   }

//   function formStateEvent() {
//     $submit.prop('disabled', !areAllValidationsPassing());
//   }

//   // hacemos focus al input username
//   $usernameInput.focus();

//   $usernameInput
//     .focus(usernameEvent)
//     .on('keyup', usernameEvent)
//     .on('keyup', passwordEvent)
//     .on('keyup', formStateEvent);

//   $passwordInput
//     .focus(passwordEvent)
//     .on('keyup', passwordEvent)
//     .on('keyup', confirmPasswordEvent)
//     .on('keyup', formStateEvent);

//   $confirmPasswordInput
//     .focus(confirmPasswordEvent)
//     .on('keyup', confirmPasswordEvent)
//     .on('keyup', formStateEvent);

//   formStateEvent();
// }

// $(document).ready(begin);