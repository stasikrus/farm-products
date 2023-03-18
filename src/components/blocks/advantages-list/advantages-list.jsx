import React from "react";
import { Ul, Li } from "/src/components/styled";
import { Advantages, StyledButton, StyledTitle } from "./styles";
import AdvantageCard from "../../ui/advantage-card/advantage-card";

function AdvantagesList({ advantages }) {
  return (
    <Advantages>
      {advantages?.length ? (
        <>
          <StyledTitle as="h2">Почему фермерские продукты лучше?</StyledTitle>
          <Ul $isGridList>
            {advantages.map((advantage) => (
              <Li key={advantage.id}>
                <AdvantageCard {...advantage} />
              </Li>
            ))}
          </Ul>
          <StyledButton minWidth={353} link="/buy">
            Купить
          </StyledButton>
        </>
      ) : null}
    </Advantages>
  );
}

export default AdvantagesList;
