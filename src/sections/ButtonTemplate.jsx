import React from "react";

const ButtonTemplate = (props) => {
  console.log(props);
  return (
    <div>
      <button href={props.link.url}>{props.link.title}</button>
    </div>
  );
};

export default ButtonTemplate;
