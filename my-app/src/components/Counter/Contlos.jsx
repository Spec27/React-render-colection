import React from "react";
import s from "./Counter.module.css"

const Contols = ({onIncrement,onDecrement}) => (
    <div className={s.CounterControl}>
    <button type="button" className={s.Btn} onClick={onIncrement}>
      Збільшити +1
    </button>
    <button  type="button" className={s.Btn} onClick={onDecrement}>
      Зменшити -1
    </button>
  </div>
)

export default Contols