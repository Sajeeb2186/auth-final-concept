import { createContext } from "react"
import PropTypes from 'prop-types';

 export const AuthContext= createContext(null);

export default function AuthProvider({children}) {
    const AuthInfo={name:'sajeeb'}
     return (
        <AuthContext.Provider value={AuthInfo}>
        
          {children}
        
        </AuthContext.Provider >
  )
}

AuthProvider.PropTypes={
    children:PropTypes.node
}
