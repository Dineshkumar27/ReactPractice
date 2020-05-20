import React from "react";
import Postdata from "./data.json";

export default function PostList() {
  return (
    <div>
      <h1> Hello Dinesh</h1>
      {Postdata.map(details => {
        return (
          <div>
            <h1>{details.name}</h1>
            <p>{details.city}</p>
            <h2>{details.age}</h2>
          </div>
        );
      })}
    </div>
  );
}
