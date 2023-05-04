import { setPokemons, startLoadingPokemon } from "./pokemonSlice"
import { pokemonApi } from '../../../api/pokemonApi'


export const getPokemons = ( page= 0 ) => {
  return async(dispatch, getstate) => {
    dispatch( startLoadingPokemon() );

    //fetch
    // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page*10}`);
    // const data = await resp.json();

    //axios
    const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page*10}`);
    console.log(data);

    dispatch( setPokemons( {pokemons: data.results, page:page+1} ))
  }
};
