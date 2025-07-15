import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguageContext } from "../context/LanguageContext";

const LanguageSelect = () => {
  const navigate = useNavigate();
  const { changeLanguage } = useLanguageContext();

  const handleSelect = (lang) => {
    changeLanguage(lang);
    navigate("/form");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4 bg-blue-50">
      <h2 className="text-2xl font-bold">انتخاب زبان | Language Selection</h2>
      <div className="flex gap-4">
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          onClick={() => handleSelect("fa")}
        >
          فارسی
        </button>
        <button
          className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800"
          onClick={() => handleSelect("en")}
        >
          English
        </button>
      </div>
    </div>
  );
};

export default LanguageSelect;
