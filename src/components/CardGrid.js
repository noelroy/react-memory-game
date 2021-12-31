import React from "react";
import SingleCard from "./SingleCard";
import styled from "styled-components";
import { useState, useEffect } from "react";

/* Styled Components 
---------------------------------------------*/

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1em;
  margin: 2em;
`

/* Card Grid Component 
------------------------------------------------*/

const CardGrid = ({ images, setImages, setTurns }) => {
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const resetChoices = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
    setTurns((turns) => turns + 1);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
        setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setImages((images) =>
          images.map((image) => {
            if (image.src === choiceOne.src) {
              return { ...image, flipped: true };
            } else {
              return image;
            }
          })
        );
        resetChoices();
      } else {
        setTimeout(() => {
            resetChoices();
          }, 700);
      }
    }
  }, [choiceOne, choiceTwo]);

  const handleOnClick = (card) => {
    if(!disabled){
    choiceOne !== null ? setChoiceTwo(card) : setChoiceOne(card);
    }
  };

  return (
    <Grid>
      {images.map((value) => (
        <SingleCard
          key={value.index}
          card={value}
          handleOnClick={handleOnClick}
          flipped={choiceOne===value || choiceTwo===value || value.flipped}
        />
      ))}
    </Grid>
  );
};

export default CardGrid;
