const form=document.getElementById("form");

function emailCheck(email){
    return email.indexOf("@")>0 && 
        email.lastIndexOf(".")>email.indexOf("@")+2 && 
        email.lastIndexOf(".")<email.length-1;
}

function passwordCheck(password){
    if(password.length<8) return false;
    let hasUpper=false;
    let hasLower=false;
    let hasSpecial=false;
    const specialChar="@#!$%^&*()";


    for(let i=0;i<password.length;i++){
        let ch=password[i];
        if(ch>="A" && ch<="Z") hasUpper=true;
        else if(ch>="a" && ch<="z") hasLower=true;
        else if(specialChar.includes(ch)) hasSpecial=true;
    }
    return hasUpper && hasLower && hasSpecial;

}


form.addEventListener("submit",function(event){

    const message=document.getElementById("message");

    const email=document.getElementById("email").value;
    const password=document.getElementById("pass").value;

    if(email===""||password===""){
        message.innerHTML="All feilds are requried";
        message.style.color="red";
        event.preventDefault();
    }else if(!emailCheck(email)){
        message.innerHTML="Please enter a valid email";
        message.style.color="red";
        event.preventDefault();
    }else if(!passwordCheck(password)){
        message.innerHTML="Password must be atleast 8 characters including with uppper case ,lower case and special characters";
        message.style.color="red";
        event.preventDefault();
    }else{
        message.innerHTML="Successfull";
        message.style.color="green";
    }
});