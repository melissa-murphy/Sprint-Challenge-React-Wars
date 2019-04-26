// Character Template
import React from "react";
import "./StarWars.css";

export default function Character(props) {
  return (
    <div className="character has-text-left box">
      <h3 className="is-size-4">Name: {props.character.name}</h3>
      <p>Born in: {props.character.birth_year}</p>
      <p>Height: {props.character.height} units</p>
      <p>Star Sign: Loading <i className="fas fa-atom fa-spin"></i></p>
    </div>
  );
}
