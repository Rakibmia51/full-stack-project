import React from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import MainNavigation from './components/MainNavigation'
import AddFoodRecipe from './pages/AddFoodRecipe'
import axios from 'axios'


const getAllRecipes = async()=>{
  let allRecipes = []
  await axios.get("http://localhost:3000/recipe").then(res=>{
    allRecipes=res.data
  })
  return allRecipes
}


  const router = createBrowserRouter([
    {path:"/", element: <MainNavigation/>,children:[
        {path:"/", element: <Home/>, loader:getAllRecipes},
        {path:"/myRecipe", element: <AddFoodRecipe/>},
        {path:"/favRecipe", element: <Home/>},
        {path:"/contact", element: <Home/>}
    ]}

  ])

export default function App() {
  return (
   <>
      <RouterProvider router={router}></RouterProvider>
   </>
  )
}
