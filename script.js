const mealContainer = document.getElementById("meal");
const btn = document.getElementById("btn");
const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch';

let getMeal = () => {
    fetch(url)
    .then(data => data.json())
    .then(item => console.log(item.meal));
}

getMeal();