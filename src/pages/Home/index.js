import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Aside from "@components/Aside";
import CircleLoading from "@components/CircleLoading";
import Card from "@components/Card";
import ActionsButtons from "@components/ActionsButtons";
import { MainContainer, StyledContainer } from "./styles";

const Home = () => {
  const pokemon = useSelector((state) => state.pokemonsCards[2]);
  const loading = useSelector((state) => state.loading);
  const cardIsOpen = useSelector((state) => state.cardIsOpen);
  const activeBottomBar = useSelector((state) => state.activeBottomBar);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "LOADED_INFO" });
    }, 3000);
  }, []);

  return (
    <MainContainer>
      <Aside />
      <StyledContainer>
        {loading ? (
          <CircleLoading />
        ) : (
          <Card
            name={pokemon.name}
            desc={pokemon.description}
            pictures={pokemon.pictures}
            distance={pokemon.distance}
            place={pokemon.place}
            skills={pokemon.skills}
          />
        )}
        <ActionsButtons openCard={cardIsOpen} disabled={!activeBottomBar} />
      </StyledContainer>
    </MainContainer>
  );
};

export default Home;
