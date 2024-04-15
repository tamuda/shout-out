import React, { useState, createContext, useContext } from "react";

// Create a context for user data
export const UserContext = createContext(null);

// Create a custom hook to use the user context
export const useUserContext = () => useContext(UserContext);

// Create a provider component that wraps your app and provides the user context
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    userId: null,
    name: "",
    usertype: "",
    // Add more user details here
  });

  const updateUser = (newDetails) => {
    setUser((prevDetails) => ({ ...prevDetails, ...newDetails }));
  };

  // Check if user is admin
  const isAdmin = user.usertype === "Admin";

  // The context value that will be supplied to any descendants of this provider
  const contextValue = {
    user,
    updateUser,
    isAdmin,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
