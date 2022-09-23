const baseColors = {
  "primary-50": "#d5e8ff",
  "primary-100": "#d4e7ff",
  "primary-300": "#1c8af3",
  "primary-400": "#207ae9",

  white: "#ffffff",
  black: "#000000",

  "blue-200": "#c9d3e7",
  "blue-300": "#a2b0cb",
  "blue-400": "#7889a9",
  "blue-500": "#576d96",

  "gray-200": "#C4C4CC",
  "gray-400": "#7C7C8A",

  "danger-light": "#f75a68",
  "danger-mid": "#cc2937",
};

const avatarColors = {
  "avatar-default-gradient": "135deg, #0659e9 0%, #3eafff 100%",
  "avatar-user-gradient": "135deg, #0659e9 0%, #3eafff 100%",
  "avatar-company-gradient": "135deg, #1c325c 0%, #4c6699 100%",

  "avatar-default": "#1c8af3",
  "avatar-user": "#1c8af3",
  "avatar-company": "#4c6699",
};

const swipper = {
  "next-prev-navigation-background": baseColors["white"],
  "next-prev-navigation-color": baseColors["primary-300"],
};

const modal = {
  "modal-title": baseColors["blue-500"],
  "modal-description": baseColors["blue-400"],

  "modal-background": baseColors["white"],

  "overlay-background": "rgba(0, 0, 0, 0.6)",
};

const textField = {
  "textField-color": baseColors["blue-500"],

  "textField-border-default": baseColors["blue-400"],
  "textField-border-active": baseColors["primary-300"],

  "textField-label-default": baseColors["blue-500"],
  "textField-label-active": baseColors["primary-400"],

  "textField-eyes-password": baseColors["blue-500"],

  "textField-helperText": baseColors["blue-500"],

  "textField-error": baseColors["danger-light"],
};

const textFieldOutlined = {};

const textFieldFilled = {
  "textField-filled-background": "#7889a926",
  "textField-filled-background-error": "#f75a681a",
};

const aliases = {
  "background-gradient": "135deg, #197fe1 0%, #0b75d9 100%",
  "button-primary": "-135deg, #2690f5 0%, #007aee 100%",

  "form-background": baseColors["white"],

  "text-color-primary": baseColors["blue-500"],
  "text-color-secondary": baseColors["black"],

  notification: "#fa3e3e",

  ...avatarColors,
  ...swipper,
  ...modal,
  ...textField,
  ...textFieldOutlined,
  ...textFieldFilled,
};

export const colors = { ...baseColors, ...aliases };
