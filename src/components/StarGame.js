import React from 'react';
import image from '../assets/dice_img.png';
import { IoMdSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";

const StarGame = ({ toggleBtn, changeTheme, theme }) => {
  return (
    <div style={{ overflowY: "hidden" }}>
      <div className='flex justify-between items-center text-center mx-4 md:mx-12'>
        <div style={{fontFamily:"Lucida Handwriting"}} className='w-[40%] md:w-[30%] mt-2 md:mt-4 text-4xl md:text-6xl flex flex-row justify-center items-center text-center animated-title'>
          Welcome
        </div>
        <div onClick={changeTheme} className='flex'>
          {theme ? <IoMoon color='black' size={"33"} /> : <IoMdSunny color='orange' size={"35"} />}
        </div>
      </div>
      <hr/>
      <div className='gap-16 flex flex-col md:flex-row text-center items-center justify-center h-[86vh] md:h-[89.5vh] w-[90%] mx-auto animated-bg'>
        <div>
          <img className='md:w-[50%] lg:w-[70%] animated-dice' src={image} alt='image_loading...' />
        </div>
        <div className='flex flex-col w-[80%] md:w-[60%] lg:w-[50%]'>
          <h1 style={{fontFamily:"Lucida Handwriting"}} className='text-3xl md:text-4xl lg:text-6xl font-bold animated-text'>DICE GAME</h1>
          <button style={{fontFamily:"Lucida Handwriting"}} onClick={toggleBtn} className='border-2 border-white text-xl font-semibold bg-black w-28 md:w-48 mx-auto text-white mt-4 px-2 py-1 rounded-lg hover:bg-sky-700 hover:scale-105 animated-button'>Play Now</button>
        </div>
      </div>
    </div>
  );
}

export default StarGame;