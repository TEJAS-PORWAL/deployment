import React, { useState } from "react";
import "./Cardsection.css";
import data from "./Cards_data.json";
import { MContext } from "./MyProvider";

export default function Cardsection(props) {
  const [item, setitem] = useState(data);
  const card_data = item.map((render) => (
    <div className="section-cards" key={render.id} id={String(render.id)}>
      <h2>{render.card_title}</h2>
      <div
        className="cards-div"
        style={{ backgroundImage: `url(${render.card_img})` }}
      ></div>
      <div className="section_content">{render.card_info}</div>
    </div>
  ));
  return (
    <MContext.Consumer>
      {(context) => (
        <div
          id="hii"
          className="cardsection"
          {
            ...setTimeout(
              ()=> {
                let s = document.getElementById("hii");
                context.setMessage(s.clientHeight/10);
              }
              ,1)
          }
        >
          {card_data}
        </div>
      )}
    </MContext.Consumer>
  );
}
