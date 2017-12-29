$(document).ready(begin);

function begin() {
    $select = $("select[name|= 'Paises']");
    $inputNumber = $("input[type|= 'number']");
    $btnNextPrincipal = $("#btnNextPrincipal");
    //Variable del modal verify
    $inputNumberVerify = $("#key");
    $butonResetVerify = $("#btn-resend");
    $codPaisVerify = $("#codigo");
    $butonNextVerify = $("#btn-next-verify");

    $inputNumber.on('keyup focus', function() {
        if ($inputNumber.val().length >= 10) {
            $btnNextPrincipal.removeAttr('disabled');
        }
    });
    $btnNextPrincipal.on('click', function() {
        random();
    });
    $select.on('change', function() {
        var value = $(this).val();
        $codPaisVerify.text("+" + value);
        console.log("+" + value);
    });

    //Eventos del modal verify
    $inputNumberVerify.on('keyup focus', function() {
        if ($(this).val().length == 3) {
            $butonNextVerify.removeAttr('disabled');

        } else {
            $butonNextVerify.prop('disabled', true);
        }

    });
    $butonResetVerify.on('click', function() {
        random();
    });
    $butonNextVerify.on('click', function() {
        window.location.href = "formulario.html";
    });

    function random() {
        var x = Math.floor(Math.random() * (1000 - 100)) + 100;
        alert('Tú codigo : LAB-' + x);
    };


}