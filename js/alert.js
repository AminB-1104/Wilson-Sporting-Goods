function formValidation(){
    var fname=document.getElementById("firstname").value;
    var lname=document.getElementById("lastname").value;
    var code=document.getElementById("zipcode").value;
    var number=document.getElementById("phone").value;
    var email=document.getElementById("email").value;
    var message=document.getElementById("message").value;

    var fregex=/^[a-zA-Z ]{3,20}$/;
    var lregex=/^[a-zA-Z ]{3,20}$/;
    var cregex=/^[0-9]{3,5}$/;
    var nregex= /^(\+92|0)[0-9]{10}$/;
    var eregex = /^[a-zA-Z0-9\._]+@[a-z]+\.[a-zA-Z\.]{3,}$/
    var mregex = /^[a-zA-Z]{3,20}$/;
    
    if(fname.match(fregex) && lname.match(lregex) && code.match(cregex) && number.match(nregex) && email.match(eregex) && message.match(mregex)){
        alert("Your message has been submitted" )
    }
    else{
        alert("Invalid info!")
    }
}





