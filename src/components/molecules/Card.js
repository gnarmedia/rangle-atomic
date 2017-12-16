import React from "react";

import Image from "../atoms/Image";
import Heading from "../atoms/Heading";
import TextBlock from "../atoms/TextBlock";
import Button from "../atoms/Button";
import Checkbox from "../atoms/Checkbox";
import Circle from "../atoms/particles/Circle";

function Card(props) {
  return (
    <li className="card">
      <div
        style={{
          float: "left",
          clipPath: "circle(45% at center)",
          marginRight: "20px"
        }}
      >
        <Image source={props.image} />
      </div>
      <Heading>{props.title}</Heading>
      <TextBlock>{props.body}</TextBlock>
      <Button onClick={props.onDelete}>Delete</Button>
      <Checkbox onClick={props.onSelect} />
    </li>
  );
}

export default Card;
