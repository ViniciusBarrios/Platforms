const baseColors = {
  "shaddow-20": "rgb(0 0 0 / 20%)",
};

const swipper = {
  "next-navigation-shadow": `2px 0 10px 0 ${baseColors["shaddow-20"]}`,
  "prev-navigation-shadow": `-2px 0 10px 0 ${baseColors["shaddow-20"]}`,
};

const shadows = {
  form: `2px 2px 10px 0 ${baseColors["shaddow-20"]}`,
  focus: "0 0 0 2px #97c4fb",
  ...swipper,
};

export { shadows };
