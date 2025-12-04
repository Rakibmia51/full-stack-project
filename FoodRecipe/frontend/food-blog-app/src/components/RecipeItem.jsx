import React from 'react'
import { useLoaderData } from 'react-router-dom'
import foodImg from '../assets/foodRecipe.png'
import { BsFillStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";

export default function RecipeItem() {
    const getAllRecipes=useLoaderData()
    console.log(getAllRecipes)
  return (
    <>
        <div className='card-container'>
            {
                getAllRecipes?.map((item, index)=>{
                    return (
                        <div key={index} className='card'>
                            <img src={foodImg} width="120px" height="100px"></img>
                            <div className='card-body'>
                                <div className='title'>{item.title}</div>
                                <div className='icons'>
                                    <div className='timer'><BsFillStopwatchFill /></div>
                                    <FaHeart />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}
