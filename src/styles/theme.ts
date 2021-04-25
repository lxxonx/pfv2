import { blueGrey } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[900],
    },
    secondary: {
      main: "#00838f",
    },
    text: { primary: "#ffffff", secondary: "#000000" },
  },
});

export default theme;
