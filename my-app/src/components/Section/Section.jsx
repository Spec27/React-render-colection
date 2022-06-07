import s from "./Section.module.css";
import PropTypes from "prop-types"

function Section({title,children}) {
    return <div className={s.Section}>
        {title && <h2>{title}</h2>} 
        {children}
    </div>
}

Section.propTypes ={
    title: PropTypes.string,
    childrin: PropTypes.node,
}

export default Section;