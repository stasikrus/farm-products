import React from "react";
import { StyledButton } from "./styles";

function Button({ children, maxWidth, link, className }) {
  return (
    <StyledButton
      $maxWidth={maxWidth}
      {...(link ? { to: link } : { as: "button", type: "button" })}
      className={className}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
