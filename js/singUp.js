$(document).ready(begin);

function begin() {
    // Llamando elementos del html 
    $inputNumber = $("input[type|= 'number']");
    $buton = $("button[type|= 'submit']");
    // Botones de la pagina Verify  
    $butonReset = $("button[class|= 'btn']");
    $butonVerify = $("button[class|= 'btn']");


    function random() {
        var x = Math.floor((Math.random() * 999) + 1);
        alert('Tú codigo : LAB-' + x);
    }
    //Agregamos nuestros eventos
    $inputNumber.on('keyup focus', function () {
        if ($inputNumber.val().length >= 10) {
            $buton.removeAttr('disabled');
        }
    });
    $buton.on('click', function () {
        random();
        window.location.href = "verify.html";
    });

    //eventos de la pagina verify
    $butonReset.on('click', function () {
        random();
    });

}