import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import LanguageSelect from "./pages/LanguageSelect.jsx";
import ChiefComplaint from "./components/ChiefComplaint.jsx";
// بقیه imports ...

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LanguageSelect />} />
          <Route path="/form" element={/* فرم */} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
