import React from 'react';
import {StyledP , StyledLink} from "../components/Styled";
import { Form } from '../components/Form';
import { Wrapper } from '../components/Styled';

export const AddPlayer = () => {
    return (
        <Wrapper bgColor="white">
            <StyledLink to="/players/list">List</StyledLink>
            <StyledP>|</StyledP>
            <StyledLink to="/players/addplayer">Add Player</StyledLink>
            <Form/>
        </Wrapper>
    )
}
