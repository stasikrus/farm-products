import React from "react";
import Title, { TitleSize, TitleLevel } from "../title/title";
import { Advantage, Image, Owner, Header, Text } from "./styles";

function AdvantageCard({ title, owner, image, about, isNegative }) {
  return (
    <Advantage isNegative={isNegative}>
      <Header>
        <Image width={56} height={56} src={image} alt={title} />
        <div>
          <Owner isNegative={isNegative}>{owner}</Owner>
          <Title size={TitleSize.SMALL}>{title}</Title>
        </div>
      </Header>
      <Text dangerouslySetInnerHTML={{ __html: about }} />
    </Advantage>
  );
}

export default AdvantageCard;
