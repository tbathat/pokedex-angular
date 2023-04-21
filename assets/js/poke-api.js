const pokeApi = {};

//Função que abstrai o consumo da url e nos retorna o objeto json
pokeApi.getPokemons = (offset = 0, limit = 0) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .catch((error) => console.error(error))
};
