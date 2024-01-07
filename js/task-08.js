
//Selectez formularul din DOM
const loginForm = document.querySelector(".login-form");

//Adaug  event listener pt evenimentul submit
loginForm.addEventListener("submit", (event) => {
    //anulez actiunea implicita a reincarcarii formularului
    event.preventDefault();
    //accesez elementele formularului
   const email = document.querySelector('input[name="email"]');
   const password = document.querySelector('input[name="password"]');

   if(email.value === '' || password.value === ''){
            alert("Toate campurile trebuie  completate!");
   }else{
      const formData = {
           email : email.value,
           password : password.value,
      };
      console.log(formData);
      formData.reset();
   }
});
