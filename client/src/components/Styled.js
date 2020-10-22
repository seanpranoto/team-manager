import {Link} from "@reach/router";
import styled from "styled-components"

export const StyledLink=styled(Link)`
    display:inline-block;
    font-size:1.5rem;
    margin:1rem 0.4rem;
`;

export const StyledP=styled.p`
    display:inline-block;
    font-size:1.5rem;
`;

export const Wrapper=styled.div`
    background:${({bgColor})=>bgColor};
    padding:0 1rem 1rem 1rem;
    width:${({width})=>width || "100%" } ;
`;

export const BorderWrapper=styled.div`
    border:1px solid black;
    padding:0.5rem 0.5rem 0.5rem 1rem;
`;

export const StyledInput=styled.input`
    width:80%;
`;

export const StyledButton=styled.button`
    background: ${props=>props.bgColor };
    color:${({color})=>color || "white"};
    width:8rem;
    text-align:center;
`;

export const Display=styled.div`
    display:${props=>props.display};
    margin:1rem;
`;




