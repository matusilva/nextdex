import React from 'react'
import axios from 'axios'
import Link from 'next/link'

const type_colors = {
  bug: '#B1C12E',
  dark: '#4F3A2D',
  dragon: '#755EDF',
  electric: '#FCBC17',
  fairy: '#F4B1F4',
  fighting: '#823551D',
  fire: '#E73B0C',
  flying: '#A3B3F7',
  ghost: '#6060B2',
  grass: '#74C236',
  ground: '#D3B357',
  ice: '#A3E7FD',
  normal: '#C8C4BC',
  poison: '#934594',
  psychic: '#ED4882',
  rock: '#B9A156',
  steel: '#B5B5C3',
  water: '#3295F6'
};

const Pokemon = ({ poke }) => {
  return (
    <main className='app'>
      <img className='logo' src="/images/logo.png" alt="logo"></img>
      <h1>Pokédex for Pokémon</h1>
      <Link href='/'>
        <a>
          Home
        </a>
      </Link>
      <div>
        <div className='card-pokemon'>
          <span className='card-id'>{poke.id}</span>
          <div className='card-pokedex'>
            <img
              src={poke.sprites.front_default}
              alt={poke.name}
            />
            <img
              src={poke.sprites.back_default}
              alt={poke.name}
            />
            <img
              src={poke.sprites.front_shiny}
              alt={poke.name}
            />
            <img
              src={poke.sprites.back_shiny}
              alt={poke.name}
            />
            <h2 className='card-details'>{poke.name}</h2>
            <br></br>
            <div>
              <h2 className='card-details'>
                {poke.types.map((type) => (
                  <span className='type-colors' key={type} style={{ background: `${type_colors[type.type.name]}` }}>
                    {type.type.name}
                  </span>
                ))}
              </h2>
            </div>
          </div>
          <h4>Altura:</h4> {poke.height}
          <h4>Peso:</h4> {poke.weight}
          <h4>Abilidade:</h4>
          {poke.abilities.map((ability) => (
            <p>
              {ability.ability.name}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
};

Pokemon.getInitialProps = async ({ query }) => {
  const id = query.id;
  const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.data);
  console.log(poke);
  return { poke };
};

export default Pokemon;