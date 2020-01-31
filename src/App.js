import React from "react";
import Index from "./component/index";
import "./css/Nav.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-image">
            <img
              className="image-show"
              src={require("./static/framework_icon/next.png")}
              alt="Nextjs icon"
            />
            <img
              className="image-show"
              src={require("./static/framework_icon/react.png")}
              alt="Reactjs icon"
            />
            <img
              className="image-show"
              src={require("./static/framework_icon/redux.png")}
              alt="Reduc icon"
            />
          </div>
          <h1 className="nav-center-text">
            How to train your <span>"React/Nextjs"</span> @Bangkok
          </h1>
          <div className="nav-image">
            <img
              className="image-show"
              src={require("./static/company_icon/AW_Logo_LB-23-circle.png")}
              alt="hello"
            />
            <img
              className="image-show"
              src={require("./static/company_icon/digital-circle.png")}
              alt="hello"
            />
            <img
              className="image-show"
              src={require("./static/company_icon/Lattesoft-Circle.png")}
              alt="hello"
            />
          </div>
        </nav>
        <Index />
      </div>
    );
  }
}

export default App;
