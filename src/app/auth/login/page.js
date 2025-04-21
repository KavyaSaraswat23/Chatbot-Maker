"use client"
import React,{useState} from 'react'
import {login} from "@/services/auth"
const Login = () => {
   const [form, setForm] = useState({
          email: "",
          password: "",
      });
      function handleChange(e){
          const fieldName = e.target.name;
          const fieldValue = e.target.value;
          setForm({...form, [fieldName]: fieldValue,})
      }
      async function handleSubmit(e){
        try{
          e.preventDefault();
          const response = await login(form);
          const {token} = response
          localStorage.setItem("token", token)
          // console.log(form)
        }catch(err) {
          alert(err);
          console.log(err);
        }
          
      }
    return (
      <div>
        <h1>Login Page</h1>
        <form onChange={handleChange} onSubmit ={handleSubmit}>
        <input name='email' type='email' placeholder='Enter your Email' ></input>
        <input name='password' type='password' placeholder='Enter your Password' ></input>
        <button type='submit'>Login</button>
      </form>
      </div>
    )
  }
  
export default Login

