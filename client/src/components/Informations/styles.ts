import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

import { styled } from "stitches";

import Link from "@infra/Link";

export const Container = styled("div", {
  width: "100%",
  maxWidth: "480px",
});

export const WrapperLogo = styled("div", {
  "@900-max": {
    marginBottom: "30px",
  },

  "@900-min": {
    marginBottom: "40px",
  },
});

export const Title = styled("h1", {
  fontWeight: 600,

  color: "$white",

  "@900-max": {
    fontSize: "25px",
    marginBottom: "10px",
    lineHeight: "30px",
  },

  "@900-min": {
    fontSize: "30px",
    marginBottom: "15px",
    lineHeight: "35px",
  },
});

export const Text = styled("p", {
  fontSize: "13px",
  fontWeight: 500,

  color: "$white",

  "@900-max": {
    lineHeight: "17px",
  },

  "@900-min": {
    lineHeight: "18px",
  },
});

export const InformationLink = styled(Link, {
  display: "inline-flex",
  alignItems: "center",

  fontWeight: 600,

  color: "$white",

  "@900-max": {
    fontSize: "14px",

    margin: "20px 0",
  },

  "@900-min": {
    fontSize: "15px",

    margin: "40px 0px 20px",
  },
});

export const ArrowRight = styled(BsArrowRightShort, {
  "@900-max": {
    fontSize: "28px",
    marginRight: "1px",
  },

  "@900-min": {
    fontSize: "30px",
    marginRight: "5px",
  },
});

export const ArrowLeft = styled(BsArrowLeftShort, {
  "@900-max": {
    fontSize: "28px",
    marginRight: "1px",
    marginLeft: "-4px",
  },

  "@900-min": {
    fontSize: "30px",
    marginRight: "5px",
  },
});
