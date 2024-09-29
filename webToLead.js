let captachChecked = false;
function handleSubmit(event){
if(captachChecked){
    let inputValue = document.querySelector(".inputValue");
    let outPutValue = document.querySelector(".outputValue");

    let formattedDate = new Date(inputValue.value).toLocaleString("en-IN");
  
    outPutValue.value = formattedDate;
} else{
    alert("Please fill recaptcha");
    event.preventDefault();
}
    
}

function timestamp(){
     var response = document.getElementById("g-recaptcha-response");
      if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
     }
     } 
     setInterval(timestamp, 500);
     
function callbackSuccess(){
    captachChecked= true;
}
