import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    // This for dark and light mode
    const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle between light and dark modes
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    updateCSSVariables();
  };

  // Function to update CSS variables based on the current mode
  const updateCSSVariables = () => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty('--primary', '#1aac83');
      root.style.setProperty('--error', '#e7195a');
      root.style.setProperty('--body-background', '#222');
      root.style.setProperty('--basic-color', '#333');
      root.style.setProperty('--text-big-color', '#fff');
      root.style.setProperty('--text-regular-color', '#ddd');
      root.style.setProperty('--error-background', '#441c1c');
    } else {
      root.style.setProperty('--primary', '#1aac83');
      root.style.setProperty('--error', '#e7195a');
      root.style.setProperty('--body-background', '#f1f1f1');
      root.style.setProperty('--basic-color', '#fff');
      root.style.setProperty('--text-big-color', '#333');
      root.style.setProperty('--text-regular-color', '#555');
      root.style.setProperty('--error-background', '#ffefef');
    }
  };
  // ----------------


  return (
    <header>
        <div className='container'>
            <Link to="/">
                <h1>Gym Todos</h1>
            </Link>
            <nav>
                {user && (
                <div className='nav-info'>
                    <div className='user-email-nav'>{user.email.split('@')[0]}</div>
                    <button onClick={handleClick}>Log out</button>
                </div>
                )}
                {!user && (
                <div className='nav-info'>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </div>
                )}
                <div className="change-mode">
                    <button id="toggleButton" onClick={toggleDarkMode}>
                        {isDarkMode && (<span class="material-symbols-outlined">dark_mode</span>)}
                        {!isDarkMode && (<span class="material-symbols-outlined">light_mode</span>)}
                    </button>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Navbar
