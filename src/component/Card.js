import React, { Component } from "react";
import { Card } from 'react-bootstrap';
import "../css/Card.css";
class PostCard extends Component {
  render() {
    const { title, body } = this.props;
    return(
      <Card className="card-wrapper">
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Card.Text>
            {body}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default PostCard;