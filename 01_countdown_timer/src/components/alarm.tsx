"use client"
import React from 'react'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcAlarmClock } from "react-icons/fc";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from 'next/link';
import { useState ,useEffect  } from 'react';


const Alarm = () => {

// jo alarm hum set kary wo jase jase hum add karty jaye wo ak array me store hota jy is k liy hum ny useState ka use kiya ta or os ko initial value hum ny ([ ]) array dy dii , os k bad hum ny ak function banya or os me state ko update karva diya or new alarm ko store karvata raha .     setalarm([...alarm, `Item ${alarm.length + 1}`]);is me ...alarm spread operator ko show karva raha hai mean k jab new item add ho gi to har time new array bany giii to sath previous alarm or items bi shown ho ga agar hum assa nahi kary gy to ak atem hi rehy gi 
  const[alarm,setalarm]=useState<string[]>([]);
  const[inputvalue,setInputValue]=useState<string>("");
  const[currenttime,setCurrentTime]=useState<string>("")



//add a item
  const addItem = () => {
    setalarm([...alarm,inputvalue]);
    setInputValue('');
  };

  //create a function for delete a item in existing array 
  const delalarm=(index: number): void => {
    // Naya array banate waqt `index` wale item ko hata dete hain.
    const newAlarms = alarm.filter((_, i) => i !== index);
    setalarm(newAlarms);
  };




  useEffect(() => {
    const updateClock = () => {
      const d = new Date();
      let hours = d.getHours();
      const minutes = d.getMinutes().toString().padStart(2, '0');
    
      const ampm  = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12; // Convert 0 (midnight) to 12          }

  const formattedTime = `${hours.toString().padStart(2, '0')} : ${minutes} :${ampm}   `;

      setCurrentTime(formattedTime);

    };
    

    // Initial call to set time immediately
    updateClock();
    // Set interval to update time every second
    const intervalId = setInterval(updateClock, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);


  useEffect(() => {
    const checkAlarms = setInterval(() => {
      alarm.forEach((time) => {
        if (time === currenttime) {
          alert(`Alarm for ${time}!`);
        }
      });
    }, 1000);

    return () => clearInterval(checkAlarms); // Clear interval on unmount
  }, [alarm, currenttime]);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 text-center">
        Set Alarm
      </h1>
      <div className='flex justify-center text-5xl  mb-5'>
      <FcAlarmClock />
      </div>
          {/* this div handle the input and button section to handle the alarm set  */}
          <div className="flex items-center mb-6">
            {/* hum yaha par jo input ka section hai os ko set karny aye hai matlab jab hum input kary value to wo humari array me store ho jy or os lehaz sy humara alarm set ho is k liy hum ak state bany gy or jo value a rahi hai like input os ko os me set kar dy gy or array update kar dy gy ... */}
            <Input
              type="text"
              id="duration"
              placeholder="Set a Alarm"
              value={inputvalue}
              onChange={(e)=>{
                setInputValue(e.target.value);}}
              className="flex-1 mr-4 rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            />
            <Button
              onClick={addItem}
              variant="outline"
              className="text-gray-800 dark:text-gray-200"
            >
              Set
            </Button>
          </div>
          <div>
          <ul >
             {alarm.map((alarm, index) => (
             <li key={index} className='flex justify-between items-center mb-3 '>
            <span>{alarm}</span>
            <span className='flex gap-3'>
              <Button
              onClick={() => delalarm(index)}
              variant="outline"
              className="text-gray-800 dark:text-gray-200"
            >
              Delete
            </Button>
            </span>
             </li>
            ))}

          </ul>   
          </div>
    </div>
     <br />
    <div className="text-5xl text-center">
       <Link href="/liveclock"> 
          <IoMdArrowRoundBack />
       </Link>
       </div>

    </div>  

  )
}

export default Alarm