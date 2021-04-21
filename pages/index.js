import React from 'react'
import axios from 'axios'
import Link from 'next/link'

const Home = ({ pokemon }) => (
  <main className='app'>
    <img className='logo' src="/images/logo.png" alt="logo"></img>
    <h1>Pokédex for Pokémon</h1>
    <div>
      {pokemon.map((poke, i) => (
        <div className='card'>
          <span className='card-id'>{i + 1}</span>
          <Link href={`/pokemon/${i + 1}`}>
            <a>
              <div className='card-pokedex'>
                <img
                  className='card-image'
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i + 1}.png`}
                  alt={poke.name}
                />
              </div>
              <h1 className='card-name'>{poke.name}</h1>
            </a>
          </Link>
        </div>
      ))}
    </div>
  </main>
);

Home.getInitialProps = async () => {
  const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.data.results);
  console.log(pokemon);
  return { pokemon };
}

export default Home;