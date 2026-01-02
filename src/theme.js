import { createTheme } from "@mui/material/styles";

const getTheme = (mode = "light") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? "#f5f5f2" : "#0a0a0a",
      },
      secondary: {
        main: mode === "dark" ? "#d7d7d7" : "#1f1f1f",
      },
      background: {
        default: mode === "dark" ? "#0b0b0b" : "#f5f5f2",
        paper: mode === "dark" ? "#151515" : "#fcfcfa",
      },
      text: {
        primary: mode === "dark" ? "#f5f5f2" : "#0b0b0b",
        secondary: mode === "dark" ? "#c9c9c9" : "#4b4b4b",
      },
      divider: mode === "dark" ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)",
    },
    shape: {
      borderRadius: 14,
    },
    typography: {
      fontFamily: '"Space Grotesk", "Helvetica Neue", Arial, sans-serif',
      h1: { fontWeight: 700, letterSpacing: "-0.02em" },
      h2: { fontWeight: 700, letterSpacing: "-0.02em" },
      h3: { fontWeight: 600 },
      h4: { fontWeight: 600 },
      button: { textTransform: "none", fontWeight: 600 },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: mode === "dark" ? "rgba(10, 10, 10, 0.9)" : "rgba(255, 255, 255, 0.9)",
            color: mode === "dark" ? "#f5f5f2" : "#0b0b0b",
            backdropFilter: "blur(14px)",
            borderBottom:
              mode === "dark"
                ? "1px solid rgba(255, 255, 255, 0.08)"
                : "1px solid rgba(0, 0, 0, 0.08)",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            padding: "10px 18px",
            transition: "transform 200ms ease, box-shadow 200ms ease",
            "&:hover": {
              transform: "translateY(-1px)",
              boxShadow:
                mode === "dark" ? "0 10px 20px rgba(0, 0, 0, 0.5)" : "0 10px 20px rgba(0, 0, 0, 0.12)",
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            transition: "transform 200ms ease, box-shadow 200ms ease",
            "&:hover": {
              transform: "translateY(-1px)",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            border: mode === "dark" ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid rgba(0, 0, 0, 0.08)",
            boxShadow: mode === "dark" ? "0 12px 30px rgba(0, 0, 0, 0.6)" : "0 12px 30px rgba(0, 0, 0, 0.08)",
            transition: "transform 220ms ease, box-shadow 220ms ease",
          },
        },
      },
    },
  });

export default getTheme;
