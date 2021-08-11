import './App.css';
import styled from "@emotion/styled";
import React from 'react';
import PokemonInfo from './components/pokemonType'
import PokemonFilter from './components/pokemonFilter'
import PokemonTable from './components/pokemonTable'
import PokemonContext from './components/pokemonContext'
const Title = styled.h1`
  text-align: center;
`;
const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1em;
`;
const TwoColumnLayout = styled.div`
  display: grid;~
  grid-template-columns: 80% 20%;
  grid-column-gap: 1rem;
`;

function App() {
  const [filter, filterSet] = React.useState("");
  const [selectedItem, selectedItemSet] = React.useState(null);
  const [pokemon, pokemonSet] = React.useState([])

  React.useEffect(() => {
    fetch("http://localhost:3000/my-app/pokemon.json")
    .then(resp => resp.json())
    .then(data =>  pokemonSet(data))
  }, [])
  return (
    <PokemonContext.Provider
    value = {{filter, filterSet, pokemon, pokemonSet, selectedItem, selectedItemSet}}>

    <PageContainer>
      <Title>Pokemon search</Title>
      <TwoColumnLayout>
      <div>
         <PokemonFilter/>
        <PokemonTable/>     
      </div>
       <PokemonInfo /> 
       </TwoColumnLayout>
    </PageContainer>
    </PokemonContext.Provider>

  );
}

export default App;
