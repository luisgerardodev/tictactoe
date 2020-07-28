import React, { Fragment, useState } from 'react';
import { Container } from "semantic-ui-react";
import Board from '../../features/board/Board';

const App = () => {

  const [isGameOn, setIsGameOn] = useState(true);
  const [turn, setTurn] = useState('x');
  

  return (
    <Fragment>
      <Container style={{ marginTop: "7em" }}>
        <Board />
      </Container>
    </Fragment>
  );
}

export default App;
