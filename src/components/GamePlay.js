import React, { useState } from 'react';
import dice_1 from '../assets/dice_1.png';
import dice_2 from '../assets/dice_2.png';
import dice_3 from '../assets/dice_3.png';
import dice_4 from '../assets/dice_4.png';
import dice_5 from '../assets/dice_5.png';
import dice_6 from '../assets/dice_6.png';
import toast from 'react-hot-toast';
import { IoArrowBackCircle } from "react-icons/io5";

const GamePlay = ({ toggleBtn, changeTheme, theme }) => {
  const arrayBox = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      toast.success("Please Select A Number !!!");
      return;
    }
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
      toast.success("Correct Dice !!!");
    } else {
      setScore((prev) => prev - 2);
      toast.success("Wrong Dice !!!");
    }
    setSelectedNumber(undefined);
    triggerAnimation();
  };

  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000); 
  };

  const diceImages = [null, dice_1, dice_2, dice_3, dice_4, dice_5, dice_6];

  const resetScore = () => {
    setScore(0);
    toast.success("Reset Score !!!")
  };

  return (
    <div style={{ backgroundColor: theme ? "white" : "black", color: theme ? "black" : "white", minHeight: "100vh" }}>
      <div className='h-[130px] md:h-[100px] text-center flex flex-col md:flex-row items-center justify-between px-16 mx-auto mt-1'>
        <div className='text-center flex flex-row justify-between w-screen md:w-[25%] px-4 md:px-0'>
          <div className='flex items-center justify-center text-center'>
            <button onClick={toggleBtn} className='font-semibold text-xl'><IoArrowBackCircle size={"50"} /></button>
          </div>
          <div className='items-center justify-center text-center'>
            <p className='text-2xl md:text-4xl font-semibold'>Total Score</p>
            <h1 className='text-2xl md:text-4xl font-bold'>{score}</h1>
          </div>
        </div>
        <div className='flex flex-row'>
          {arrayBox.map((ele, index) => (
            <div key={index}>
              <button
                style={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  borderRadius: "50px",
                  backgroundColor: selectedNumber === ele ? (theme ? "black" : "white") : "",
                  color: selectedNumber === ele ? (theme ? "white" : "black") : (theme ? "black" : "white")
                }}
                onClick={() => setSelectedNumber(ele)}
                className={`border-2 border-${theme ? 'black' : 'white'} mx-1 md:mx-2  px-4 py-2`}>
                {ele}
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div className='flex-col flex justify-center items-center mx-auto mt-2'>
        <img
          onClick={roleDice}
          className={`hover:scale-105 rounded-3xl w-[30%] md:w-[15%] cursor-pointer ${isAnimating ? 'rotate-animation' : ''}`}
          src={diceImages[currentDice]}
          alt={`dice_${currentDice}`}
        />
        <div>
          <p className='font-semibold text-xl mt-1'>Click on Dice to roll</p>
        </div>
        <div>
          <button onClick={resetScore} style={{ transition: "0.2s" }} className='font-semibold border-2 px-4 py-1 rounded-md mt-2 md:mt-2 hover:scale-105 border-white'>Reset Score</button>
        </div>
        <div>
          <button onClick={() => setShowRules(!showRules)} style={{ transition: "0.2s" }} className='bg-black text-white font-semibold border-2 border-white px-4 py-1 rounded-md mt-2 md:mt-4 hover:scale-105 '>{showRules ? "Hide Rules" : "Show Rules"}</button>
        </div>
      </div>
      
      {showRules && 
        <div className={`border-2 border-${theme ? 'black' : 'white'} w-[95%] md:w-[50%] justify-center items-center text-center mx-auto mt-4`} style={{ backgroundColor: theme ? 'white' : 'black' }}>
          <h2 className={`font-bold text-2xl text-center md:text-start w-[100%] md:w-[70%] mx-auto ${theme ? 'text-black' : 'text-white'}`}>How To Play Dice Game</h2>
          <ul className={`list-disc list-inside ${theme ? 'text-black' : 'text-white'}`}>
            <li className={`w-[90%] md:w-[70%] mx-auto text-start pt-4 ${theme ? 'text-black' : 'text-white'}`}>Select any number</li>
            <li className={`w-[90%] md:w-[70%] mx-auto text-start pt-2 ${theme ? 'text-black' : 'text-white'}`}>Click on dice image</li>
            <li className={`w-[90%] md:w-[70%] mx-auto text-start pt-2 ${theme ? 'text-black' : 'text-white'}`}>After clicking on dice, if the selected number is equal to the dice number, you will get the same points as the dice.</li>
            <li className={`w-[90%] md:w-[70%] mx-auto text-start pt-2 ${theme ? 'text-black' : 'text-white'}`}>If you guess wrong, 2 points will be deducted.</li>
          </ul>
        </div>
      }
    </div>
  );
}

export default GamePlay;
