import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../../firebase/firebase.config"

export const AuthContext= createContext(null)

export default function AuthProvider( {children}) {


      const[user,setUser]=useState('');

    
    const registerUser=(email,password)=>{


      return  createUserWithEmailAndPassword(auth,email,password)
        


    }

    const loginUser=(email,password)=>{




       return signInWithEmailAndPassword(auth,email,password)
        

    }


    const logOut=()=>{
       return signOut(auth)
    }
     
    // observe auth state change

     useEffect(()=>{

         const unSubscribe= onAuthStateChanged(auth,currentUser=>{

            setUser(currentUser);

            console.log(currentUser)





        });


       return ()=>{


        unSubscribe();



       }


     },[])





    const authInfo={
        registerUser,
        loginUser,
        user,
        setUser,
        logOut
        
    }


  return (
    <div>


        <AuthContext.Provider  value={authInfo}>

           {children} 

        </AuthContext.Provider>

        
        
        
    </div>
  )
}
