import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Settings from "../Settings/Settings";
import { AppContainer } from "./App.styles";

const App = () => {
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
};

export default App;
