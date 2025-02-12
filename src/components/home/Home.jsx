import { useContext } from "react"
import { AuthContext } from "../../provider/AuthProvider"


export default function Home() {

  const authInfo= useContext(AuthContext)
  console.log(authInfo)
  return (
    <div> This is Home: { authInfo.name}</div>
  )
}
