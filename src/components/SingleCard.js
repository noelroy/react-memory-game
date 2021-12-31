import React from "react";
import styled, { keyframes } from "styled-components";

const blinkAnimation = keyframes`
  0% {
    animation-timing-function: ease-out;
    transform: scale(1);
    transform-origin: center center;
  }

  10% {
    animation-timing-function: ease-in;
    transform: scale(0.91);
  }

  17% {
    animation-timing-function: ease-out;
    transform: scale(0.98);
  }

  33% {
    animation-timing-function: ease-in;
    transform: scale(0.87);
  }

  45% {
    animation-timing-function: ease-out;
    transform: scale(1);
  }
`

const Card = styled.div`
  border: .2em solid white;
  border-radius: .5em;
  background-image: linear-gradient(120deg, #31a1d8, white);
  padding 1em;
`

const FlippedCard = styled(Card)`
animation: ${blinkAnimation} 1.2s ease 0s 1 normal forwards;
`

const Image = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
`

const BackImage = styled(Image)`
max-width: 150px;
`

const SingleCard = ({ card, handleOnClick, flipped }) => {
  if (flipped) {
    return (
      <FlippedCard>
        <Image src={card.src} alt="card front" />
      </FlippedCard>
    );
  } else {
    return (
      <Card>
        <BackImage
          src="/images/poke_trainer.png"
          alt="card back"
          onClick={() => handleOnClick(card)}
        />
      </Card>
    );
  }
};

export default SingleCard;
