import { createContext } from 'react';  
const TestContext = createContext();
export default TestContext;
export const ContactContextProvider = ({ children }) => {
  // Define any state or functions you want to provide to the context
  const value = {
    // Example state or function
    // contacts: [],
    // addContact: (contact) => {},
  };

  return (
    <TestContext.Provider value={value}>
      {children}
    </TestContext.Provider>
  );
};