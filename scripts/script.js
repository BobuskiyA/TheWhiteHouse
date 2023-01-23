var FormName, FormEmail, FormPhone, result;
function sendMail(){
    FormName=$('#name').val();
    FormEmail=$('#email').val();
    FormPhone=$('#phone').val();
    result=formValidation(FormName, FormEmail, FormPhone);
    
    if(result){
        $.ajax({
        method:'POST',
        url:"./scripts/sendEmail.php/", 
        data:$('#contactForm').serialize(),
        success:function(result){
            $('#success').removeClass("hidden");
            $('#internalError').addClass("hidden")
        },
        error:function(result){
            $('#internalError').removeClass("hidden");  
            $('#success').addClass('hidden');
            console.log(result.error)
        }
    });
    }
};

function formValidation(name, email, phone){
    var mailformat = /^\w+([\.-]?\w+)*[@gmail.com]*(\.\w{2,3})+$/ ;
    var phoneformat = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/ ;
    if(name.length<=2) {
        $('#nameValidationError').removeClass('hidden');
        return false;
    }
    else $('#nameValidationError').addClass('hidden');
    
    if(!email.match(mailformat)) {
        $('#emailValidatoinError').removeClass('hidden');
        return false;
    }
    else $('#emailValidatoinError').addClass('hidden');

    if(!phone.match(phoneformat)) {
        $('#phoneValidatonError').removeClass('hidden');
        return false;
    }
    else {
        $('#phoneValidatonError').addClass('hidden');
        return true;
    }
}

var visibility = false ;
function toggleBurgerMenu(){
    console.log(visibility)
    if(!visibility) {
        $('.burger-menu').removeClass('burger-menu--hidden');
        visibility = !visibility;
    }
    else {
        $('.burger-menu').addClass('burger-menu--hidden');
        visibility = !visibility;
    }
    return true;
}