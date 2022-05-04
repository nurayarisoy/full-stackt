import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { AppContextProvider } from "../context/AppContext";

export const Providers = ({ children }) => {
  return (
    <Suspense fallback="loading">
      <AppContextProvider>{children}</AppContextProvider>
    </Suspense>
  );
};

Providers.propTypes = {
  children: PropTypes.node,
};
