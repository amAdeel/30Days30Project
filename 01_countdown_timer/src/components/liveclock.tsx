"use client"
import React, { useState,useEffect } from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from 'next/link';
export const Liveclock = () => {
   

    const Clock = () => {
      const [time, setTime] = useState<string>('');
      const [amorpm,setAmOrPm]=useState<string>('');
      const [caldata,setcaldate]=useState<string>('');
    
      useEffect(() => {
        const updateClock = () => {
          const d = new Date();
          let hours = d.getHours();
          const minutes = d.getMinutes().toString().padStart(2, '0');
          const seconds = d.getSeconds().toString().padStart(2, '0'); 
          const correctdate=d.getDate().toString()+"/"+d.getMonth()+"/"+d.getFullYear()
        
          const ampm  = hours >= 12 ? 'PM' : 'AM';
          hours = hours % 12 || 12; // Convert 0 (midnight) to 12          }

      const formattedTime = `${hours.toString().padStart(2, '0')} : ${minutes} : ${seconds}    `;

          setTime(formattedTime);
          setAmOrPm(ampm)
          setcaldate(correctdate)

        };
        
    
        // Initial call to set time immediately
        updateClock();
        // Set interval to update time every second
        const intervalId = setInterval(updateClock, 1000);
    
        // Clear interval on component unmount
        return () => clearInterval(intervalId);
      }, []);
    
      return <>
      {time}
      <span className='text-lg flex flex-row-reverse'>{amorpm}</span>

      <span className='text-lg p-5'>{caldata}</span>

      </>;
    };
    
    
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 text-center">
          Live Clock
        </h1>
        <div className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
            <Clock/>
        </div>
      </div>
      <br/>
      <div className="text-5xl text-center">
        <Link href="./"> 
           <IoMdArrowRoundBack />
        </Link>
       </div>    
    </div>
  );
};
