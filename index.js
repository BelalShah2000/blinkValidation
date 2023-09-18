function validate_BlinkStoreform(){


    //  FOR NAME
    let checkName=document.myform.name.value;

  if(checkName==null || checkName==""){
    alert("name can't be Blank ")
    return false;
  }


//   FOR EMAIL

  let checkEmail =document.myform.Email.value;

   let firstChar=  checkEmail.indexOf("@");
   let lastChar = checkEmail.lastIndexOf(".")

if(firstChar<1 || lastChar<firstChar+2 || lastChar+2>=checkEmail.length){
    alert("Please Inter The valid Email")
    return false;

}


//  FOR   CPASSWORD

let firstPassword=document.myform.Password.value;
let secendPassword=document.myform.CPassword.value
if(firstPassword==secendPassword){
    true;

}else{
    alert('Please Inter Same Password')
    return false;
}




// For Strong Password 

 let  goodPassword=([a-z])([A-Z])([0-9]);

 let newPass=document.myform.Password.value;
 let testThings=goodPassword.test(newPass);


if(newPass==true){
    return true;

}else{
    alert('Please Inter Strong Password')
    return false;
}














}