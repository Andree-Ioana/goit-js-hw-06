

const categoriesList = document.getElementById("categories");
const categories = categoriesList.querySelectorAll("li.item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category, index) => {

    const categoryTitle = category.querySelector("h2").textContent;
    console.log('');
    console.log(`Category: ${categoryTitle}`);
   
    const categoryElements = category.querySelectorAll("li");
    console.log(`Elements: ${categoryElements.length}`);
})