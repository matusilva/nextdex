import React from 'react'
import axios from 'axios'
import Link from 'next/link'

const Pokemon = ({ poke }) => {
  return (
    <div>
      <h2>{poke.name}</h2>
      <img src={poke.sprites.front_default}></img>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
};

Pokemon.getInitialProps = async ({ query }) => {
  const id = query.id;
  const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.data);
  return { poke };
};

export default Pokemon;