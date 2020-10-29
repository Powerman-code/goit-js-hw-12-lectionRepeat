import pokemonCardTpl from './pokemon-card.hbs'

fetch('https://pokeapi.co/api/v2/pokemon/2')
    .then(response => {
        console.log(response.json());
        return response.json();
    })
    .then(pokemon => {
        // console.log(pokemon);
        const markup = pokemonCardTpl(pokemon);
        console.log(markup);
    })
    .catch(console.log('Есть ошибка'))