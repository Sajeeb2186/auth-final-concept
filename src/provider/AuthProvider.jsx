
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react"
import PropTypes from 'prop-types';

 export const AuthContext= createContext(null);

export default function AuthProvider({children}) {

  const[user,setUser]= usestate('null')

  const createUser=(email,password)=>{

    return createUserWithEmailAndPassword(auth, email, password);

  }


  const authInfo={user,createUser};
  
     return (
        <AuthContext.Provider value={AuthInfo}>
        
          {children}
        
        </AuthContext.Provider >
  )
}

AuthProvider.PropTypes={
    children:PropTypes.node
}
