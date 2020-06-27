import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    background: white;
    margin: 1rem;
    border: solid .2rem black;
    width: 18rem;
    display: flex;
    flex-direction: column;
`
const CharacterCard = ({ name, height, mass, hair_color, eye_color, birth_year, gender}) => {

    return(
        <Container>
            <h1>{name}</h1>
            <p>Height: {height} cm</p>
            <p>Mass: {mass} kg</p>
            <p>Hair Color: {hair_color}</p>
            <p>Eye Color: {eye_color}</p>
            <p>Birth Year: {birth_year}</p>
            <p>Gender: {gender}</p>
        </Container>
    );
};

export default CharacterCard;