import React, { useState } from 'react';
import { BorderWrapper, StyledButton, StyledInput, Display } from './Styled';
import { StyledForm } from "./Styled2";
import axios from "axios";
import { navigate } from '@reach/router';

export const Form = () => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [message, setMessage] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/players", { name, position })
            .then(res => navigate("/players/list"))
            .catch(err => setMessage(err.response.data.errors.name.message));
    }


    return (
        <BorderWrapper>
            <h1>Add Player</h1>
            <StyledForm onSubmit={createUser}>
                <Display display="block">
                    <label htmlFor="name">Player Name: </label>
                    <StyledInput type="text" name="name" onChange={e => setName(e.target.value)} />
                </Display>
                <p>{message}</p>
                {name.length < 2 ? <p style={{ color: "red" }}>*Name must be at least 2 characters long.</p> : <p></p>}
                <Display display="block">
                    <label htmlFor="position">Prefered Position: </label>
                    <StyledInput type="text" name="position" onChange={e => setPosition(e.target.value)} />
                </Display>
                <Display display="block">
                    <StyledButton bgColor="green" disabled={name.length < 2} >Add</StyledButton>
                </Display>
            </StyledForm>
        </BorderWrapper>
    )
}
