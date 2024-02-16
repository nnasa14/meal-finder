const axios = require('axios');

const options = {
  method: 'GET',
  url: 'www.themealdb.com/api/json/v1/1/random.php',
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

let getMeal = () => {
    fetch(url)
    .then(data => data.json())
    .then(item => console.log(item.meal));
}

getMeal();