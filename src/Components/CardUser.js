import React from "react";
import Card from "react-bootstrap/Card";

function CardUser({ account }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{account.title}</Card.Title>
          <Card.Text>{account.completed}</Card.Text>
          <Card.Title>{account.userId}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardUser;
