import React, { useEffect } from 'react';
import './App.css';
import { navigate, Router } from "@reach/router";
import { List } from './Pages/List';
import { StyledP, StyledLink, Wrapper } from "./components/Styled"
import { AddPlayer } from './Pages/AddPlayer';

function App() {
  useEffect(() => {
    navigate("/players/list");
  }, [])

  return (
    <Wrapper bgColor="#eeeeee" width="55rem">
      <StyledLink to="/players/list">Manage Players</StyledLink>
      <StyledP>|</StyledP>
      <StyledLink to="/status/game/1">Manage Player Status</StyledLink>
      <Router>
        <List path="/players/list" />
        <AddPlayer path="/players/addplayer" />
      </Router>
    </Wrapper>
  );
}

export default App;
