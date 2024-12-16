import React, { createContext, useContext, useState } from "react";

// Create Context
const LightContext = createContext();

// Custom hook for using the context
export const useLight = () => useContext(LightContext);

// Context Provider
export const LightProvider = ({ children }) => {
  const [lightIntensity, setLightIntensity] = useState(0); // Default intensity

  return (
    <LightContext.Provider value={{ lightIntensity, setLightIntensity }}>
      {children}
    </LightContext.Provider>
  );
};
