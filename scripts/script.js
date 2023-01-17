function sendMail(){
    name=$('#name').val();
    email=$('#email').val();
    phone=$('#phone').val();
    formValidation(name, email, phone);
    $.ajax({
        /****************** CHANGRE AFTER TRANSFER TO THE SERVER ************************/
    url:"http://localhost/TheWhiteHouse-Fork/scripts/sendEmail.php", 
    type:'post',
    dataType:'json',
    data:{name:name, email:email, phone:phone},
    success:function(result){
        $('#success').removeClass("hidden");
    },
    error:function(result){
        $('#internalError').removeClass("hidden");  
    }
});
};

function formValidation(name, email, phone){
    var mailformat = /^\w+([\.-]?\w+)*[@gmail.com]*(\.\w{2,3})+$/ ;
    var phoneformat = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/ ;
    if(name.length<=2) {
        $('#nameValidationError').removeClass('hidden');
        return;
    }
    else $('#nameValidationError').addClass('hidden');
    
    if(!email.match(mailformat)) {
        $('#emailValidatoinError').removeClass('hidden');
        return;
    }
    else $('#emailValidatoinError').addClass('hidden');

    if(!phone.match(phoneformat)) {
        $('#phoneValidatonError').removeClass('hidden');
        return;
    }
    else $('#phoneValidatonError').addClass('hidden');
}