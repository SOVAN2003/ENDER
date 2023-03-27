import React , {useState, useEffect} from 'react';
import {Loader , Card , FromField } from "../components";
import {BrowserRouter , Link , Route , Routes } from 'react-router-dom';

import {man,half} from '../assets';


const Welcome = () => {
    const style = {
        main: {
            color: "blue",
            backgroundColor : "#18374F"
        }
    }

    return(
    <section className='max-w-2xl mx-auto ml-auto mt-20'>
        <div className="inline-block p-3 pb-9">
            <h1 className='font-extrabold text-[#B1B2FF] text-[32px]'>
                All about ENDER..!
            </h1>
            <ul className='mt-2 text-[#666e75] text - [16px] max-w[500px] flex items-centre'>
                <li className="px-7">
                    ENDER is s AI image generation technology enables endless possibilities for creative expression, 
                    personalized design, and improved accuracy in fields such as medicine and architecture.
                </li>
                <li className="px-7">
                    The limitless potential of AI technology in image generation opens up new possibilities 
                    for creativity, innovation, and problem-solving in various industries.
                </li>
            </ul>
            <ul className='mt-7 text-[#666e75] text - [16px] max-w[500px] flex items-centre'>
                <li className="px-7">
                <h3 className='font-extrabold text-[#B1B2FF] text-[15px]'>
                        What is ENDER?
                    </h3>
                    ENDER is self made Project with the help of the OpenAI API Dall e API. It helps us to generate AI arts.
                </li>
            </ul> 
            <ul className='mt-7 text-[#666e75] text - [16px] max-w[500px] flex items-centre'>
                <li className="px-7">
                    <h3 className='font-extrabold text-[#B1B2FF] text-[15px]'>
                        What is mean by ENDER?
                    </h3>
                   ENDER is a kind of peral whixh used to make portal in a popular game <strong>MINECRAFT</strong>. ENDER portal teleport us in to the END dimension.
                   END is the last dimension in the game and there is the Boss Ender Dragon. Want to know more about ENDER 
                   & END Portal ? - 
                   <a href='https://minecraft.fandom.com/wiki/End_portal' className='text-[#B1B2FF]'> Minecraft Wiki</a>
                </li>
            </ul>
            <ul className='mt-7 text-[#666e75] text - [16px] max-w[500px] flex items-centre'>
                <li className="px-7">
                    <h3 className='font-extrabold text-[#B1B2FF] text-[15px]'>
                    When was ENDER created?
                    </h3>
                  <p>ENDER was created in 27/03/2023.</p>
                </li>
            </ul>  

           
        </div>

        <button className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold
         hover:text-white  ml-3 py-3 px-6 border border-blue-500 hover:border-transparent rounded">
           <Link to="/">Community</Link>
        </button>  

        <img
            src={half}
            alt={half}
            className="w-8/12 h-9/12 object-cover opacity-85"
        />  

        <button className=" w-auto flex justify-between 
                        items-centre bg-transparent hover:bg-blue-500 text-blue-700 font-semibold
         hover:text-white   ml-3 py-3 px-3 border border-blue-500 hover:border-transparent rounded">
           <Link to="/about" className='mx-10'>Contact Me Still need to connect</Link>
        </button>     
        </section>
    
    );
}

export default Welcome;