window.addEventListener("load",function() {

// var valid=true;

    var submitBtn = document.getElementById("submit");
    submitBtn.addEventListener("click", onSubmitForm);

    function empty(inputField, errorField, errorMsg) {
        if (inputField.value === ""){
            console.log(errorMsg);
            errorField.innerHTML=errorMsg;
            errorField.style.borderColor="#f25125";
            inputField.style.borderColor="#f25125";
        }
        else {
            errorField.innerHTML="";
            errorField.style.borderColor="#62f441";
            inputField.style.borderColor="#62f441";
        }
    }
    function onSubmitForm(evt){

        var movieName = document.getElementById("moviename");
        var movieTime = document.getElementById("movietime");
        var paymentVerification = document.getElementById("payment");
        var fourthVerification = document.getElementById("fourth");
        var expDate = document.getElementById("expdate");
        var emailAddress = document.getElementById("emailaddress");



        empty(movieName, movieNameError, "Enter movie name.");
        empty(movieTime, movieTimeError, "Enter prefered movie time");
        empty(paymentVerification, paymentTextError, "payment method error");
        empty(fourthVerification, fourthVerificationError, "card number invalid");
        empty(expDate, expdateError, "exp date wrong");
        empty(emailAddress, emailaddressError, "email invalid");



        evt.preventDefault();
        console.log("Done")
        };
})