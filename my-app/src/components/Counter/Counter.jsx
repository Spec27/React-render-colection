import { useState,useEffect} from "react";
/* import Controls from './Controls'; */
import s from "./Counter.module.css";

export default function Counter() {
const [initialValue, setInitialValue] = useState(0)

    
const handleIncrement = () => {
    setInitialValue(prevState => prevState+ 1 );
    };
    
 const handleDecriment = () => {
        setInitialValue(prevState =>prevState -1);
       
  };
  

  useEffect(() => {
    
},[initialValue])
  
  
    return (
      <>
        <div className={s.Counter}>
        <span className={s.CounterValue}>{initialValue}</span>
      </div>
    <button type="button" className={s.Btn} onClick={handleIncrement}>
      Збільшити +1
            </button>
            <button  type="button" className={s.Btn} onClick={handleDecriment}>
      Зменшити -1
    </button>
        </>
    )
}