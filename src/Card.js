import React from "react";


function Card(props) {
  console.log("here!..");
  console.log(props);
  return (
    <>
      <div className="Card" >
        <div className="pic">
          <img src={props.avatar_url} height="80" width="80" alt="" />
        </div>
        <div className="about">
          <span className="name">{props.name || props.login}</span>
          <a
            href={props.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="company"
          >
            {props.company || "none"}
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
