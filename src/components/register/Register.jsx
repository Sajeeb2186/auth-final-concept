
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


export default function Register() {

     



     const {registerUser,setUser}=useContext(AuthContext)

     const [error,setError]=useState('')

  const handleRegister=(e)=>{
    e.preventDefault();
    const name=e.target.name.value;
    const email= e.target.email.value;
    const password=e.target.password.value;
    const confirmPassword=e.target.confirmPassword.value;
   
    if(password.length<6){
      setError("Password have atleast 6 character")
      return
    }


     if(password !== confirmPassword){
      setError("password didn't match")
      return

    }

    if(!/[A-Z]/.test(password)){
      setError("Password must have one uppercase letter")
      return
    }


    if (!/\d/.test(password)) {
      setError("Password must have at least one digit");
      return;
  }

  if (!/[@#$%^&*]/.test(password)) {
    setError("Password must have at least one special character (@, #, $, %, ^, &, *)");
    return;
}




    setError('')


    console.log(name,email,password);

    registerUser(email,password)
    .then(result=>setUser(result.user))
    .catch(error=>setError(error.message))
 }


  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col ">
      <div className="text-center ">
        <h1 className="text-5xl font-bold">Register now!</h1>
        
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input type="text" name="name"  placeholder="Your Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email"  placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input type="password" name="confirmPassword" placeholder="Confirm password" className="input input-bordered" required />

            {
              error &&  <small className="text-red-500">{error}</small>
            }



            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
             <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p>Already have an account?<Link to="/login"><button className="btn btn-link">Login</button></Link></p>
      </div>
    </div>
  </div>
  )
}
