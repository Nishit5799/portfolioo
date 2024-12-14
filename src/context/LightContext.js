// src/context/LightContext.js
import React, { createContext, useState } from "react";

// Create Context
export const LightContext = createContext();

// Create Provider Component
export const LightProvider = ({ children }) => {
  const [lightIntensity, setLightIntensity] = useState(0.5); // Default light intensity

  return (
    <LightContext.Provider value={{ lightIntensity, setLightIntensity }}>
      {children}
    </LightContext.Provider>
  );
};
