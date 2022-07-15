import { useState } from "react";
import classNames from "classnames";
import"./ColorPicker.css";


export default function ColorPicker({ options }) {
    const [activeOptionIdx, setActiveOptionIdx] = useState(0);

    const setActiveIndex = index => {
        setActiveOptionIdx(index);
    };

   const makeOptionClassName = (index) => {
        return classNames('Option',{'Option--active':index === activeOptionIdx})
      
    }

    const { label } = options[activeOptionIdx];

 
    return (
        <div className='ColorPicker'>
                <h2 className='Title'>Color-Picker</h2>
                <p>Вибраний вами колір: {label}</p>
            <div>
                    {options.map(({ label, color }, index) => ( 
                        <button     
                        key={label}
                        className={makeOptionClassName(index)}
                        style={{ backgroundColor: color }}
                        onClick={()=>setActiveIndex(index)}
                        >
                    </button>
                    )
                    )}
            </div>
        </div> 
    )
}