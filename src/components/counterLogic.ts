import { useState, useEffect, useRef } from "react";
export const useCounterLogic = (
  step: number,
): UseCounter => {
    const counterId = useRef(0); ///  useRef to initiate a state which its value will initiate just the first render
    const [counter,setCounter]=useState(0); /// define our counter as a state 
    const ceil =(num:number)=> Math.round((num + Number.EPSILON) * 100) / 100 /// to avoid javascript bad response on floating points


  useEffect(() => { 
    return () => {
      if (counterId.current !== 0) {
        clearInterval(counterId.current); //// component did mount
      }
    };
  },[]); //// it will run just on the first render
  const count = () => { /// count with given steps and avoid concat instead of counting
    setCounter((_count)=>ceil(_count+step));

  };
  const startToCount = () => {/// runs on click of the button
    if (counterId.current === 0) {
      counterId.current = setInterval(() => {
        count();
      }, 1000);
    }
  };
  return { startToCount, counter };
};


interface UseCounter {
  counter: number;
  startToCount: () => void;
}
