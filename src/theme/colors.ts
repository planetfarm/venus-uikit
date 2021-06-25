import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#fbce98",
  primaryBright: "#fbce98",
  primaryDark: "#fbce98",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#fbce98",
  borderColor: "#E9EAEB",
  card: "#202020",
  modalCard: "rgb(32 32 32)",
  menu: "#050401",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#fbce98",
  background: "#0e121b",
  backgroundDisabled: "#ced4da",
  contrast: "#fbce98", // Title
  invertedContrast: "#191326",
  input: "#FFFFFF",  
  primaryDark: "#0098A1",
  tertiary: "#1c2335",
  text: "#fbce98", //#f18a4e
  textDisabled: "#6c757d",
  textSubtle: "#fbce98", // icons
  borderColor: "#524B63",
  card: "rgb(146 4 116 / 75%)",
  modalCard: "rgb(32 32 32)",
  menu: "#050401",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
