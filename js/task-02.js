

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.getElementById("ingredients");
const liElements = ingredients.map(ingredient =>{
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");

  return li;
});
ulIngredients.append(...liElements);


