import React from 'react';
import { Wrapper, StyledLink, StyledP } from '../components/Styled';
import { ShowAll } from "../components/ShowAll"

export const List = () => {
    return (
        <Wrapper bgColor="white">
            <StyledLink to="/players/list">List</StyledLink>
            <StyledP>|</StyledP>
            <StyledLink to="/players/addplayer">Add Player</StyledLink>
            <ShowAll/>
        </Wrapper>
    )
}
