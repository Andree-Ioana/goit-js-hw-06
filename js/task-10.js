function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  }


  function createBoxes(amount){
     const boxesContainer = document.getElementById("boxes");
     for(let i = 0; i < amount; i++){
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
     }
  }

  function destroyBoxes(){
    const boxes = document.getElementById("boxes");
    boxes.innerHTML = " ";
  }

