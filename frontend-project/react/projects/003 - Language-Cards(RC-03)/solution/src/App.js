import React, { Component } from "react";
import "./App.scss";
import CardComponent from "./card/Card";
import { languages } from "./helpers/data";
import reactSvg from "./assets/react.svg";

class ContainerComponent extends Component {
  render() {
    return (
      <>
        <img src={reactSvg} className="top-img" alt="reactjs" />
        <section className="menu-container">
          <div className="bars"></div>
          <section className="top">Languages</section>
          <section className="bottom">
            {languages.map((language, index) => {
              return <CardComponent key={index} language={language} />;
            })}
          </section>
        </section>
      </>
    );
  }
}

export default ContainerComponent;
