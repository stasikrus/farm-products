import React from "react";
import Logo from "../../ui/logo/logo";
import { StyledSection, Copyright } from "./styles";

function Footer() {
  return (
    <StyledSection as="footer">
      <Logo />
      <Copyright>Создано 2023</Copyright>
    </StyledSection>
  );
}

export default Footer;
