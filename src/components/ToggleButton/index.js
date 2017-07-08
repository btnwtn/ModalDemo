import React from "react";
import withCount from "../../containers/withCount";
import Button from "../Button";

const ToggleButton = withCount(props =>
  <Button {...props}>Open ({props.count})</Button>
);

export default ToggleButton;
