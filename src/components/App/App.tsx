import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Settings from "../Settings/Settings";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to={"/"} />} />
          <Route path="/" element={<Navigation />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
