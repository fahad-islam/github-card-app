import React from "react";
import Card from "./Card";

function CardBox(props) {
  console.log(props.profiles);
  return (
    <div className="CardsBox">
      <div className="CardBoxDiv">
        {props.profiles.map((profile) => {
          console.log(props.profiles.indexOf(profile));
          return (
            <Card {...profile.data} key={props.profiles.indexOf(profile)} />
          );
        })}
      </div>
    </div>
  );
}

export default CardBox;
