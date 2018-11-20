import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

const TeamPortal = () =>
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1>Welcome to the Team Portal Page!</h1>
        </Jumbotron>
      </Col>
    </Row>
  </Container>;

export default TeamPortal;