import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    background: lightgray;
    margin: 1rem;
    border: solid .1rem black;
    border-radius: 2.5rem;
    width: 15rem;
    display: flex;
    flex-direction: column;
    font-family: oxygen;
`
const Info = styled.p`
    font-size: 1.3rem;
`

const CharacterCard = ({ name, height, mass, skin_color, hair_color, eye_color, birth_year, gender}) => {

    return(
        <Container>
            <h1>{name}</h1>
            <Info>Height: {height} cm</Info>
            <Info>Mass: {mass} kg</Info>
            <Info>Skin Color: {skin_color}</Info>
            <Info>Hair Color: {hair_color}</Info>
            <Info>Eye Color: {eye_color}</Info>
            <Info>Birth Year: {birth_year}</Info>
            <Info>Gender: {gender}</Info>
        </Container>
    );
};

export default CharacterCard;