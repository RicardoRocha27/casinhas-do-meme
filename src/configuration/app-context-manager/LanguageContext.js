import React, { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext(null);

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "pt"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const value = {
    language,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
