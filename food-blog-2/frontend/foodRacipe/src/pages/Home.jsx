import React from 'react'
import foodRecipe from '../assets/foodRecipe.png'
import AddFoodRecipe from './AddFoodRecipe'





export default function Home() {

  

  return (
    <>
   
        <section className='home'>
            <div className="left">
                <h1>Food Recipe</h1>
                <h5>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</h5>
                <button>Share your Recipe</button>
            </div>

            <div className="right">
                <img src={foodRecipe}  width="320px" height="300px"  alt=""/>
            </div>
        </section>


        <div className="bg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,32L20,32C40,32,80,32,120,58.7C160,85,200,139,240,170.7C280,203,320,213,360,186.7C400,160,440,96,480,85.3C520,75,560,117,600,122.7C640,128,680,96,720,74.7C760,53,800,43,840,53.3C880,64,920,96,960,122.7C1000,149,1040,171,1080,197.3C1120,224,1160,256,1200,266.7C1240,277,1280,267,1320,245.3C1360,224,1400,192,1420,176L1440,160L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
        </div>
        <div>
            <AddFoodRecipe/>
        </div>
   
    </>
  )
}
