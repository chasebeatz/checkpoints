// src/PlayersList.js
import React from "react";
import Player from "./Player";
import players from "./players";
import { Row, Col } from "react-bootstrap";

const PlayersList = () => {
  return (
    <Row>
      {players.map((player, index) => (
        <Col key={index} xs={12} md={6} lg={3}>
          <Player {...player} />
        </Col>
      ))}
    </Row>
  );
};

export default PlayersList;
