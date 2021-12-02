import { createContext, useState } from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  return (
    <UserContext.Provider value={{
      username,
      email,
      setUsername,
      setEmail,
    }}
    >
      {children}
    </UserContext.Provider>
  )
}