import { NextPage, GetStaticProps } from "next";
import { Layout } from "@/components/layout";
import { pokeApi } from "@/api";
import { ListPokemonsResponse, SmallPokemon } from "@/interfaces";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <Layout title="Listado de Pokemons">
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await pokeApi.get<ListPokemonsResponse>("/pokemon?limit=10");

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: { pokemons },
  };
};

export default HomePage;
