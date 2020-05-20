import React from "react";
import Postdetails from "./Postdetails";
import PostData from "./data.json";

export default function PostList(props) {
  return (
    <div>
      {PostData.map((items, index) => {
        return <Postdetails data={items} key={index} />;
      })}
    </div>
  );
}
