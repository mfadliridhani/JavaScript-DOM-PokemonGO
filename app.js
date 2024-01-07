const container = document.querySelector('#container')

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/
const baseImgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i = 1; i <= 500; i++) {
    // console.log(i)
    const PokemonGoALL = document.createElement('div');
    PokemonGoALL.classList.add('pokemon');

    const imgPokemonGoAll = document.createElement('img');
    imgPokemonGoAll.src = `${baseImgURL}${i}.png`;

    const labelPokemonGo = document.createElement('span');
    labelPokemonGo.innerText = `${i}`;

    container.appendChild(imgPokemonGoAll);
    container.appendChild(labelPokemonGo);
    container.appendChild(PokemonGoALL);
}