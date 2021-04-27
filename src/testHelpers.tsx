import React, { ReactNode } from "react";
import { render, RenderResult } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { dark } from "./theme";

/* eslint-disable import/prefer-default-export */
export const renderWithTheme = (component: ReactNode, theme = dark): RenderResult => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};
