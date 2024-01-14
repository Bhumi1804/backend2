import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
function Signup() {
  const[name,setName]=useState()
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()
const navigate=useNavigate()
const handleSubmit=(e)=>{
  e.preventDefault()
  axios.post('https://localhost:5000/register',{name,email,password})
  .then(result=>console.log(result))
 
  .catch(err=>console.log(err))
  navigate('/Login')

}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name"  onChange={(e)=>setName(e.target.value)} required  />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} required />

        <button type="submit">Register</button>
      </form>
      <p>Already have an account ?</p>
      <button>
      <Link to="/login"> Login</Link>
      </button>
    </div>
  );
}

export default Signup;
