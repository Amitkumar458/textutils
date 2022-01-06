import React from 'react'

function alert(props) {
    const capital = (word) => {
        let Words = word.toLowerCase();
        return Words.charAt(0).toUpperCase() + Words.slice(1)
    }
    return (
        <div style={{height: "22px"}}>
            {props.alert && <div className={` alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{height: "40px" , padding:"9px"}}>
                    <strong> {capital(props.alert.type)} </strong> : {props.alert.msg}
                </div>}
        </div>
    )
}

export default alert;
