import { createTheme } from "@mui/material/styles";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#6750A4",
          },
          background: {
            default: "#fef7ff",
            paper: "#fff",
          },
        }
      : {
          primary: {
            main: "#D0BCFF",
          },
          background: {
            default: "#1C1B1F",
            paper: "#2B2930",
          },
        }),
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export const createAppTheme = (mode) => createTheme(getDesignTokens(mode));
