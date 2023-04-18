import "./styles/global.css";

import Test from "./pages/Test";

import { ThemeProvider } from "@mui/styles";
import themeOptions from "./themes";
import { createTheme } from "@mui/material";

const theme = createTheme(themeOptions);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Test />
    </ThemeProvider>
  );
}

export default App;