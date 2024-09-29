function handleSubmit(){

    let inputValue = document.querySelector(".inputValue");
    let outPutValue = document.querySelector(".outputValue");

    let formattedDate = new Date(inputValue.value).toLocaleString("en-IN");
  
    outPutValue.value = formattedDate;


}