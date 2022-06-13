import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import NotFound from "../NotFound/NotFound";
import Settings from "../Settings/Settings";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />}/>
          <Route path="/" element={<Navigation />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
