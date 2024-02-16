document.addEventListener("DOMContentLoaded", function () {
    const mealsContainer = document.getElementById('meals');
    const btn = document.getElementById('btn');
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php';

    let getMeal = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const mealsName = data.meals[0].strMeal;
                mealsContainer.textContent = `${mealsName}`;
            })
            .catch(error => console.error('Fetch error:', error));
    }

    btn.addEventListener("click", getMeal);
    getMeal();
});