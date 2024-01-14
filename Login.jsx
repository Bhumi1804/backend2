import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
function Login()
{
    
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()
const navigate=useNavigate()
const handleSubmit=(e)=>{
  e.preventDefault()
  axios.post('https://localhost:5000/login',{email,password})
  .then(result=>
    {console.log(result)
        if(result.data==="success")
        {
            navigate('/Home')
        }
 
    })
  .catch(err=>console.log(err))

}
    return(
        <div>
            <h2>Login</h2>
           <form onSubmit={handleSubmit}>
        

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} required />

        {/* <button type="submit">Register</button> */}
      </form>
     <button>
      <Link to="/Home"> submit</Link>
      </button>
        </div>
    )
}
export default Login