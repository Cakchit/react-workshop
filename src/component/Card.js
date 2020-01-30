import React from "react";
import "../css/Card.css"
import { Card, Button } from "react-bootstrap";

class AnimalCard extends React.Component {
  render() {
    const { img, alt, title, text} = this.props;
    return (
      <Card  className="m-4 card-hover card-image">
        <Card.Img
          variant="center"
          src={img}
          alt={alt}
          className="image"
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button onClick={()=>this.props._onClick(title)}>Click me!</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default AnimalCard;
