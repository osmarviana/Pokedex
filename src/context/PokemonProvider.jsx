import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { useForm } from "../hook/useForm";

export const PokemonProvider = ({ children }) => {
  const [offset, setOffset] = useState(0);
  const [allPokemons, setAllPokemons] = useState([]);

  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);

  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: "",
  });

  const getAllPokemons = async (limit = 10) => {
    const baseURL = "https://pokeapi.co/api/v2/";
    const res = await fetch(
      `${baseURL}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });

    const results = await Promise.all(promises);
    setAllPokemons([...allPokemons, ...results]);
    setLoading(false);
  };

  const getPokemonByID = async (id) => {
    const baseURL = "https://pokeapi.co/api/v2/";
    const res = await fetch(`${baseURL}pokemon/${id}`);
    const data = await res.json();
    return data;
  };

  const getPokemonsByName = async (name) => {
    const baseURL = "https://pokeapi.co/api/v2/";
    const res = await fetch(`${baseURL}pokemon/${name}`);
    const data = await res.json();
    return [data];
  };

  const getPokemonsByType = async (type) => {
    const baseURL = "https://pokeapi.co/api/v2/";
    const res = await fetch(`${baseURL}type/${type}`);
    const data = await res.json();
    const filteredResults = data.pokemon.map((pokemon) => pokemon.pokemon);
    setFilteredPokemons(filteredResults);
  };

  useEffect(() => {
    getAllPokemons();
  }, [offset]);

  const handleClickLoadMore = () => {
    setOffset(offset + 10);
  };

  const [typeSelected, setTypeSelected] = useState({
    bug: false,
    dark: false,
    dragon: false,
    electric: false,
    fairy: false,
    fighting: false,
    fire: false,
    flying: false,
    ghost: false,
    grass: false,
    ground: false,
    ice: false,
    normal: false,
    poison: false,
    psychic: false,
    rock: false,
    steel: false,
    water: false,
    unknow: false,
  });

  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const handleSelectCheckBox = (e) => {
    const { name } = e.target;
    const label = document.querySelector(`label[for="${name}"]`);
    label.classList.toggle("selected");

    setTypeSelected({
      ...typeSelected,
      [e.target.name]: e.target.checked,
    });
    if (e.target.checked) {
      const filteredResults = allPokemons.filter((pokemon) =>
        pokemon.types.map((type) => type.type.name).includes(e.target.name)
      );
      setFilteredPokemons([...filteredPokemons, ...filteredResults]);
    } else {
      const filteredResults = filteredPokemons.filter(
        (pokemon) =>
          !pokemon.types.map((type) => type.type.name).includes(e.target.name)
      );
      setFilteredPokemons([...filteredResults]);
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        allPokemons,
        getPokemonByID,
        getPokemonsByName,
        getPokemonsByType,
        handleClickLoadMore,
        loading,
        setLoading,
        active,
        setActive,
        handleSelectCheckBox,
        filteredPokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
