const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://webknox-recipes.p.rapidapi.com/recipes/quickAnswer',
  params: {
    q: 'How much vitamin c is in 2 apples?'
  },
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'webknox-recipes.p.rapidapi.com'
  }
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