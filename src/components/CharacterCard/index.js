import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="card" onClick={() => props.clickCharacter(props.id)}>
      <div className="img-container">
        <img src={props.image} />
      </div>
    </div>
  );
}

export default CharacterCard;