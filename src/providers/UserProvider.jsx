'use client'
import UserContext from "@/context/userContext";
import {useState} from 'react';

const UserProvider = ({children}) => {
    const [user, setUser] = useState({Dj:'Bravo'});
  return (
    <UserContext.Provider value={{user}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider