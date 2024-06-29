import React, { createContext, useContext, useState } from "react";

const FeatureFlagContext = createContext(undefined);

export const FeatureFlagProvider = ({ children }) => {
  const [FeatureFlags, setFeatureFlags] = useState({});
  const handleLoadFeatureFlags = ({ data }) => {
    setFeatureFlags(data);
  };
  const handleUpdateFeatureFlags = ({ key, value }) => {
    setFeatureFlags((prev) => {
      let temp = { ...prev };
      temp[key] = value;
      return temp;
    });
  };
  return (
    <FeatureFlagContext.Provider
      value={{ FeatureFlags, handleLoadFeatureFlags, handleUpdateFeatureFlags }}
    >
      {children}
    </FeatureFlagContext.Provider>
  );
};

export const useFeatureFlag = () => {
  const context = useContext(FeatureFlagContext);
  if (!context) {
    throw new Error(
      "useFeatureFlag must be used within an must be used within an FeatureFlagProvider",
    );
  }
  return context;
};
