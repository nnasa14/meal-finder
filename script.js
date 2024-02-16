document.getElementById('meals');
const btn = document.getElementById('btn');
const url = 'https://www.themealdb.com/api/json/v1/1/random.php';

let getMeal = () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
    const mealName = data.meals[0].strMeal;
    console.log(mealName);
    })
    .catch(error => console.error('Fetch error:'));
}

getMeal();