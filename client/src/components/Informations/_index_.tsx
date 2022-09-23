import Logo from "@components/Logo";

import {
  Container,
  WrapperLogo,
  Title,
  Text,
  InformationLink,
  ArrowLeft,
  ArrowRight,
} from "./styles";

type InformationsProps = {
  title: string;
  text: string;
  direction: "right" | "left";
  informationLink?: {
    to: string;
    text: string;
  };
};

export default ({
  title,
  text,
  direction,
  informationLink,
}: InformationsProps) => {
  return (
    <Container
      css={{
        "@900-min": {
          paddingRight: direction === "right" ? "50px" : 0,
          paddingLeft: direction === "left" ? "50px" : 0,
        },
        "@900-max": {
          paddingRight: 0,
          paddingLeft: 0,
        },
      }}
    >
      <WrapperLogo>
        <Logo
          css={{
            "@600-max": {
              width: "120px",
              height: "auto",
            },

            "@600-min": {
              width: "150px",
              height: "auto",
            },
          }}
        />
      </WrapperLogo>

      <Title>{title}</Title>

      <Text>{text}</Text>

      {!!informationLink && (
        <InformationLink to={informationLink.to}>
          {direction == "left" && <ArrowLeft />}
          {informationLink.text}
          {direction == "right" && <ArrowRight />}
        </InformationLink>
      )}
    </Container>
  );
};
