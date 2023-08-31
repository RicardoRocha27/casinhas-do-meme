import { ThemeProvider } from "@mui/material";
import "./App.css";
import {
  theme,
  Navbar,
  LanguageButton,
  WhatsappButton,
  Footer,
} from "./common/index";
import { LanguageContextProvider } from "./configuration/app-context-manager/LanguageContext";
import { RoutesManager } from "./configuration/app-routes-manager/RoutesManager";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LanguageContextProvider>
        <Router>
          <Navbar />
          <RoutesManager />
          <Footer />
        </Router>
        <LanguageButton />
        <WhatsappButton />
      </LanguageContextProvider>
    </ThemeProvider>
  );
}

export default App;
