import React, { Component} from "react";
import s from "./Dropdown.module.css";


class Dropdown extends Component{
    state = {
        visible: false,
    }

    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }));
    };

    render() {
        const {visible}= this.state
        return (
            <div className={s.Dropdown}>
                <button
                    type="Button"
                    className={s.DropdownTogle}
                    onClick={this.toggle}>
                    {visible ? "Приховати" : "Показати"}
                </button>
                {visible && <div className={s.DropdownMenu}>
                    Menu
                </div>} 
            </div>  
        )
    }
}


export default Dropdown;