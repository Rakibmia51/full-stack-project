import React, { useState } from 'react'
import foodRecipe from '../assets/foodRecipe.png'
import RecipeItem from '../components/RecipeItem'
import { useNavigate } from 'react-router-dom'
import Modal from '../components/Modal'
import InputForm from "./InputForm";



export default function Home() {
    const navigate = useNavigate()
    const [isOpen, setIsOpen]= useState(false)

    const addRecipe=()=>{
        let token = localStorage.getItem("token")
        if(token)
        navigate("/addRecipe")
        else{
            setIsOpen(true)
        }
    }
  return (
    <>
        
        <section className='home'>
            <div className='left'>
                <h1>Food Recipe</h1>
                <h5>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</h5>
                <button onClick={addRecipe}>Share your Recipe</button>
            </div>
            <div className='right'>
                <img src={foodRecipe} width="320px" height="300px"  alt="" />
            </div>
        </section>

        <div className='bg'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fillOpacity="1" d="M0,0L48,26.7C96,53,192,107,288,117.3C384,128,480,96,576,74.7C672,53,768,43,864,74.7C960,107,1056,181,1152,202.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
        {(isOpen)&& <Modal onClose={()=>setIsOpen(false)}> <InputForm setIsOpen={()=>setIsOpen(false)}/></Modal>}
        <div className='recipe'>
            <RecipeItem/>
        </div>
       
    </>
  )
}
