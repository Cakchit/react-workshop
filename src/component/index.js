import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AnimalCard from "./Card";

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "This is Title of Image",
      image: [
        {
          image: require("../img/1.jpg"),
          title: "Hedgehog",
          text: "this is hedgehog",
          alt: "hedgehog"
        },
        {
          image: require("../img/2.jpg"),
          title: "Dog Work",
          text: "this is dog",
          alt: "dog"
        },
        {
          image: require("../img/3.jpg"),
          title: "Dog Lazy",
          text: "Sleepy (-.-)zZ",
          alt: "dog"
        },
        {
          image: require("../img/4.jpg"),
          title: "Dog Sleep",
          text: "this is hedgehog",
          alt: "hedgehog"
        },
        {
          image: require("../img/5.jpg"),
          title: "Dog twin",
          text: "this is dog",
          alt: "dog"
        },
        {
          image: require("../img/6.jpg"),
          title: "Dog Love",
          text: "Sleepy (-.-)zZ",
          alt: "dog"
        }
      ]
    };
    this._onClick = this._onClick.bind(this);
  }

  _onClick(e) {
    console.log(e);
    document.title = `Hello ${e}`;
    this.setState({
      name: e
    });
  }

  render() {
    return (
      <Container>
        <div className="header justify-content-center">
          <h1>
            {"<--"} {this.state.name} {"-->"}
          </h1>
        </div>
        <Row>
          {this.state.image.map((value, key) => {
            return (
              <Col md={4}>
                <AnimalCard
                  className="justify-content-center"
                  img={value.image}
                  title={value.title}
                  text={value.text}
                  alt={value.alt}
                  _onClick={this._onClick}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default index;
