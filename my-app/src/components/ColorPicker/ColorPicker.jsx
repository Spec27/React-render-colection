import s from "./ColorPicker.module.css";


function ColorPicker({ options }) {
    return (
        <div className={s.ColorPicker}>
            <h2 className={s.Title}>Color-Picker</h2>
            <div>
                {options.map(option =>
                    <span
                        key={option.label}
                        className={s.Option}
                        style={{ backgroundColor: option.color }}>
                        </span>)}
            </div>
        </div>
    )
}

export default ColorPicker;   