// Character Template
import React from "react";
import "./StarWars.css";

export default function Character(props) {
  return (
    <div className="character has-text-left box">
      <h3>Name: {props.character.name}</h3>
      <p>Born in: {props.character.birth_year}</p>
      <img src={props.character.homeworld}
        alt={props.character.name+`'s home planet`}
      />
    </div>
  );
}
