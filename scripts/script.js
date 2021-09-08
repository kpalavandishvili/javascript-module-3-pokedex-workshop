import { getAllPokemons, getOnePokemonSprite } from "./api.js";

async function init() {
  let root = document.getElementById("root");
  root.textContent = "Hello world again!";
  let newstuff = document.createElement("p");
  root.appendChild(newstuff);
  const pokemon = await getAllPokemons();
  pokemon.forEach(async ({ name, url }) => {
    const newPokemon = document.createElement("div");
    const pokemonLink = document.createElement("a");
    pokemonLink.href = url;
    pokemonLink.textContent = name

    const spriteUrl = await getOnePokemonSprite(url);
    const image = document.createElement("img");
    image.src = spriteUrl;
    newPokemon.appendChild(pokemonLink);
    newPokemon.appendChild(image);
    root.appendChild(newPokemon);
  });
}
init();