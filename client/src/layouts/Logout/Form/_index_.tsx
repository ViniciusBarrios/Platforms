import { useContext } from "react";

import { StitchesCssType } from "stitches";

import Button from "@components/Button";

import { AuthContext } from "@contexts/AuthContext";

import { NoLogOut, YesLogOut } from "@static/assets/icons/logOut";

import { Container } from "./styles";

export default () => {
  const { logOut } = useContext(AuthContext);

  const styledButtons: StitchesCssType = {
    height: "170px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    linearGradient: "$background-gradient",

    "@480-min": {
      "&:hover": {
        opacity: 0.9,
      },

      transition: "200ms",
    },

    "> p": {
      fontSize: "15px",
      fontWeight: 500,

      lineHeight: "20px",

      marginTop: "10px",
    },
  };

  return (
    <Container>
      <Button
        to="/"
        css={{
          ...styledButtons,

          "@480-min": {
            marginRight: "15px",
          },

          "@480-max": {
            marginRight: "10px",
          },
        }}
      >
        <NoLogOut />

        <p>Não, tava brincando!</p>
      </Button>

      <Button css={styledButtons} onClick={() => logOut()}>
        <YesLogOut />

        <p>Sim, falando serio!</p>
      </Button>
    </Container>
  );
};
