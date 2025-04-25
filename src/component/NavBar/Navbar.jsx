'use client'
import Link from 'next/link'
import React, { useContext } from 'react'
import "@/component/NavBar/Navbar.css";
import { Authcontext } from '@/context/auth';
import { useRouter } from 'next/router';
import { logout } from '@/services/auth';
import { destroyToken, getToken } from '@/helpers/auth';

const Navbar = () => {
  const globalData = useContext(Authcontext);
  const isLoggedIn = globalData.isLoggedIn
  async function logoutHandler(){
    logout({
      token :getToken()
    });
    destroyToken();

  }
  return (
    <div className='nav-bar'>
        <div className='nav-logo'>
            <h2>MyApp</h2>
        </div>
        <div className='nav-option' >
            <Link href="/home" style={{padding: '20px', textDecoration: 'none', color: 'white'}}>Home</Link>
            <Link href="/about" style={{padding: '20px', textDecoration: 'none', color: 'white'}}>About</Link>
            <Link href="dashboard" style={{padding: '20px', textDecoration: 'none', color: 'white'}}>Dashboard</Link>
            {isLoggedIn ? <button onClick={logoutHandler}>Logout</button>: <button>Login</button>}
        </div>
    </div>
  )
}

export default Navbar
