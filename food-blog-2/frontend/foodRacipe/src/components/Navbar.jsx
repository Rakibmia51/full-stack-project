import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        <header>
            <h2>Food Blog</h2>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/myRecipe">My Recipe</NavLink></li>
                <li><NavLink to="/favRecipe">Favourites</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </header>
    </>
  )
}
