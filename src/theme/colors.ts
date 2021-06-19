import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#d5af82",
  primaryBright: "#d5af82",
  primaryDark: "#d5af82",
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
  textSubtle: "#d5af82",
  borderColor: "#E9EAEB",
  card: "#202020",
  menu: "#050401",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#fc5130",
  background: "#0e121b",
  backgroundDisabled: "#ced4da",
  contrast: "#d5af82", // Title
  invertedContrast: "#191326",
  input: "#FFFFFF",  
  primaryDark: "#0098A1",
  tertiary: "#1c2335",
  text: "#d5af82", //#f18a4e
  textDisabled: "#6c757d",
  textSubtle: "#d5af82", // icons
  borderColor: "#524B63",
  card: "rgb(32 32 32 / 83%)",
  menu: "#050401",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
