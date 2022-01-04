import React from 'react'

function alert(props) {
    const capital = (word) => {
        let Words = word.toLowerCase();
        return Words.charAt(0).toUpperCase() + Words.slice(1)
    } 
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           <strong> {capital(props.alert.type)} </strong> : {props.alert.msg}
        </div>
    )
}

export default alert;
