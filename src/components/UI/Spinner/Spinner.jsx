import React from "react";
import { SpinnerStyled } from "./SpinnerStyled";

const Spinner = () => {
  return (
    <SpinnerStyled>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </SpinnerStyled>
  );
};

export default Spinner;
