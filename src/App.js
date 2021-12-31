import { useState } from 'react';
import CardGrid from './components/CardGrid';
import styled from 'styled-components'

const Heading = styled.h1`
  font-size: 3em;
  margin : 1em;
`

const GameBoard = styled.div`
  text-align: center;
  display:grid;
  justify-items: center;
  width: 100%;
`

const NewButton = styled.button`
  padding: 1em 3em; 
  border: 2px solid white;
  border-radius: 1em;
  color: white;
  font-weight: 700;
  font-size: 1em;
  background-color: #55AEDD;
`

const Paragraph = styled.p`
  font-weight: 700;
  font-size: 2em;
`

const cardImages = [
  { src: "/images/bulbasaur.png", flipped: false },
  { src: "/images/charmander.png", flipped: false },
  { src: "/images/eevee.png", flipped: false },
  { src: "/images/psyduck.png", flipped: false },
  { src: "/images/snorlax.png", flipped: false },
  { src: "/images/squirtle.png", flipped: false }

]

function App() {

  const [images, setImages] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const newCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((value, index) => { return {...value, index};});
    setImages(newCards);
    setTurns(0);
  }


  return (
    <GameBoard>
      <Heading>Memory Game</Heading>
      <NewButton onClick={() => shuffleCards()}>Start New Game</NewButton>
      <CardGrid images={images} setImages={setImages} setTurns={setTurns} />
      <Paragraph>#turns : {turns}</Paragraph>
    </GameBoard>
  );
}

export default App;
