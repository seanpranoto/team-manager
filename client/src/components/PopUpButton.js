import React, { useState } from 'react';
import { StyledButton } from './Styled';
import { StyledPopUp } from './Styled2';
import axios from "axios";


export default ({ name, id}) => {
    const [opacity, setOpacity] = useState(0);

    const deletePlayers=()=>{
        axios.delete(`http://localhost:8000/api/players/${id}`)
        .then(result=>console.log(result))
        .catch(err=>console.log(err));
    };

    return (
        <>
            <StyledButton onClick={(e) => setOpacity(1)} bgColor="red">Delete</StyledButton>
            <StyledPopUp opacity={opacity}>
                <p>Are you sure you want to remove {name}?</p>
                <StyledButton onClick={deletePlayers} bgColor="green">Yes</StyledButton>
                <StyledButton onClick={e => setOpacity(0)} bgColor="red">No</StyledButton>
            </StyledPopUp>
        </>
    );
};