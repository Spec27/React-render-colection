import './Box.css'
function Box({type = 'samall',ClassNames = "",stules}) {
    return (
        <div className={`box box-${type} ${ClassNames} `}>Box</div>
    )
}

export default Box;