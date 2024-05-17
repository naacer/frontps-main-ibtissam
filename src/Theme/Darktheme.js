const { createTheme } = require('@mui/material');

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7ca41e",
    },
    secondary: {
      main: "#5A20CB"
    },
    black: {
      main: "#242B2E"
    },
    background: {
        main:"#000000",
        default:"#0D0D0D",
        paper:"#0D0D0D"
    },
    textColor: {
      primary: "#111111"
    }
  }
});
