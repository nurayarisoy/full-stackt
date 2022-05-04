import React, { useState } from "react";
import "./Card.scss";

export default function CardComponent(props) {
  const [showOption, setShowOption] = useState(false);

  return (
    <section
      className="card-container"
      onClick={() => setShowOption(!showOption)}
    >
      {showOption ? (
        <ul className="card-list">
          {props.language.infos.map((info) => {
            return <li key={info}>{info}</li>;
          })}
        </ul>
      ) : (
        <>
          <section className="top-card">
            <img
              className="card-img"
              src={props.language.img}
              alt={props.language.name}
            ></img>
          </section>
          <section className="bottom-card">{props.language.name}</section>
        </>
      )}
    </section>
  );
}
