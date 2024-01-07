
//Selectez elementul din Dom
const validationInput = document.getElementById("validation-input");

//Adaug evenimentul blur pe input
validationInput.addEventListener("blur", () => {
    //aflu nr de caractere din data-length
    const nrLength = validationInput.getAttribute("data-length");
    //verific nr de caractere
    if(validationInput.value.length === nrLength){
        validationInput.classList.add("valid");
        validationInput.classList.remove('invalid');
    }else{
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    }
});