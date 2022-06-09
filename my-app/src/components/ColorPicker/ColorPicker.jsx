import React,{Component} from "react";
import"./ColorPicker.css";

class ColorPicker extends Component{
    state = {
        activeOptionIdx:0,
    }

    setActiveIndex = (index) => {
        this.setState({activeOptionIdx:index})
    }

    makeOptionClassName = (index) => {
        const optionClasses = ['Option'];
        if (index === this.state.activeOptionIdx) {
            optionClasses.push('Option--active');
        }
        return optionClasses.join(' ')
    }


    render() {
        const { options } = this.props;
        const { activeOptionIdx } = this.state;
        const activeOption = options[activeOptionIdx];
            
        const { label } = activeOption;
       
        return (
            <div className='ColorPicker'>
                <h2 className='Title'>Color-Picker</h2>
                <p>Вибраний вами колір: {label }</p>
            <div>
                    {this.props.options.map(({ label, color }, index) => ( 
                        <button     
                        key={label}
                        className={this.makeOptionClassName(index)}
                        style={{ backgroundColor: color }}
                        onClick={()=>this.setActiveIndex(index)}
                        >
                    </button>
                    )
                    )}
            </div>
        </div> 
        )
    }
}


export default ColorPicker;   