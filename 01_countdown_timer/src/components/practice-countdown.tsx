"use client";
// import { useState, useRef , useEffect , ChangeEvent} from "react"; 
// import { Input } from "@/components/ui/input"; 
// import { Button } from "@/components/ui/button"; 
// import React from 'react'


// export const Countdown = () => {
// const [duration, setDuration] = useState<number | string>("");
// const [timeLeft, setTimeLeft] = useState<number>(0);
// const [isActive, setIsActive] = useState<boolean>(false);
// const [isPaused, setIsPaused] = useState<boolean>(false);
// const timerRef = useRef<NodeJS.Timeout | null>(null);

// // this function for user input first check user input type if it';s number or greater then 0 then move down and setTimeLeft(duration) mean reming time user input k equal ho jy . setIsActive or SetIsPause done ko false kiya mean timer agr phele sy start hai to ruk jy , then again if condition laGI mean agr phele timerRef ki kohi value availble hai to osy clear kar do ...  clearInterval(timerRef.current); ya javascript prebuild function hai .
// const handleSetDuration = (): void => {
//   if (typeof duration === "number" && duration > 0) {
//     setTimeLeft(duration);
//     setIsActive(false);
//     setIsPaused(false);
//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//     }
//   }
// };


// // another function to handle start

// const handleStart=():void=>{
//   if(timeLeft>0){
//     setIsActive(true);
//     setIsPaused(false);
//   }
// }


// // another function for pause the timer 

// const handlePause = (): void => {
//   if (isActive) {
//     setIsPaused(true);
//     setIsActive(false);
//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//     }
//   }
// };


// // now we create another function for handle reset k hum apny timer ko reset or original value par move karva dy 
// //hum line57 me setTimeLeft ko equal kar rahy hai jo originL VALUE ahi hai os k equal  or agar wo os k equal na ho to zero kar do , is sy wo start sy again start ho jy ga . 

// const handleRest=():void=>{
//   setIsActive(false);
//   setIsPaused(false);
//   setTimeLeft(typeof duration === "number" ? duration:0)
//   if(timerRef.current){
//     clearInterval(timerRef.current)
//   }
// }


// useEffect(() => {
//   if (isActive && !isPaused) {
//     timerRef.current = setInterval(() => {
//       setTimeLeft((prevTime) => {
//         if (prevTime <= 1) {
//           clearInterval(timerRef.current!);// the code variABLE! mean i demn sure it's not the null value comes here in typescript is called non-null Assertion
//           return 0;
//         }
//         return prevTime - 1;
//       });
//     }, 1000);
//   }
//   return () => {
//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//     }
//   };
// }, [isActive, isPaused]);



// //


// const formatTime = (time: number): string => {
//   const minutes = Math.floor(time / 60);
//   const seconds = time % 60;
//   return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
// };
// const handleDurationChange = (e: ChangeEvent<HTMLInputElement>): void => {
//   setDuration(Number(e.target.value) || "");
// };

//   return (
// <>    
//   <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
//       {/* Timer box container */}
//       <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
//         {/* Title of the countdown timer */}
//         <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 text-center">
//           Countdown Timer
//         </h1>
//         {/* Input and set button container */}
//         <div className="flex items-center mb-6">
//           <Input
//             type="number"
//             id="duration"
//             placeholder="Enter duration in seconds"
//             value={duration}
//             onChange={handleDurationChange}
//             className="flex-1 mr-4 rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
//           />
//           <Button
//             onClick={handleSetDuration}
//             variant="outline"
//             className="text-gray-800 dark:text-gray-200"
//           >
//             Set
//           </Button>
//         </div>
//         {/* Display the formatted time left */}
//         <div className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
//           {formatTime(timeLeft)}
//         </div>
//         {/* Buttons to start, pause, and reset the timer */}
//         <div className="flex justify-center gap-4">
//           <Button
//             onClick={handleStart}
//             variant="outline"
//             className="text-gray-800 dark:text-gray-200"
//           >
//             {isPaused ? "Resume" : "Start"}
//           </Button>
//           <Button
//             onClick={handlePause}
//             variant="outline"
//             className="text-gray-800 dark:text-gray-200"
//           >
//             Pause
//           </Button>
//           <Button
//             onClick={handleRest}
//             variant="outline"
//             className="text-gray-800 dark:text-gray-200"
//           >
//             Reset
//           </Button>
//         </div>
//       </div>
//   </div> 
// </>
//      )
// }
