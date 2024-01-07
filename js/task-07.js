

//Selectez elementele din DOM
const fontSize = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

//adaug event listener pt evenimentul input

fontSize.addEventListener("input", () => {
    textSpan.style.fontSize =`${fontSize.value}px`;
});
