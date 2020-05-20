import React from "react";

export default function Postdetails(props) {
  return (
    <div>
      <h1> Hello Dinesh</h1>

      <h1>{props.data.name}</h1>
      <p>{props.data.city}</p>
      <h2>{props.data.age}</h2>
    </div>
  );
}
