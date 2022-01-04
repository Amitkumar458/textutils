import React, { useState } from 'react'


export default function Textform(props) {
    const [text, setText] = useState('');
    const handelOnchange = (event) => {
        setText(event.target.value);
    }

    const handelupclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert("success" , "Converted in uppercase");

    }

    const handellowclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert("success" , "Converted in lowercase");
    }
    
    const handelclearclick = () => {
        let newtext = "";
        setText(newtext);
        props.showalert("success" , "Textbox clear");
    }
    
    const handelcopyclick = () => {
        let text = document.getElementById("exampleFormControlTextarea1")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("success" , "Text copied in Clipboard");
    }
    
    const handelreplaceextraspaceclick = () => {
        let newsstr = text.split(/[ ]+/);
        setText(newsstr.join(" "));
        props.showalert("success" , "Removed extra spaces from your Text");
    }

    const handelcapitalfirstclick = () => {
        let uppercaseword = "";
        let word = text.split(" ");
        word.forEach(element => {
            uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " ";
            setText(uppercaseword);
        });
        props.showalert("success" , "All first letter of word is capitalized");
    }


    return (
        <>
           
            <div style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h1>{props.heading}</h1>
                <div className="mb-3" >
                    <textarea className="form-control" style={{ backgroundColor: props.mode === "dark" ? "rgb(74 ,84 ,92)" : "white", color: props.mode === "light" ? "black" : "white" }} value={text} placeholder='Enter your text Here' onChange={handelOnchange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <h3>Edit Texts</h3>
                <button className='btn btn-danger mx-1 my-1' onClick={handelupclick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handellowclick}>Convert to Lowercase</button>
                <button className='btn btn-info mx-1 my-1' onClick={handelcapitalfirstclick}>Capital first letter</button>
                <button className='btn btn-warning mx-1 my-1' onClick={handelreplaceextraspaceclick}>Remove Extra space</button>
                <button className='btn btn-success mx-1 my-1' onClick={handelcopyclick}>Copy</button>
                <button className='btn btn-secondary mx-1 my-1' onClick={handelclearclick}>Clear text</button>
            </div>
            <div className='container my-2' style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h2 className='my-1'> Your Text Summary </h2>
                <p className='my-2'>{text.split(" ").length - 1} Words and {text.length} Characters </p>
                <p>{text.split(" ").length * 0.008} Minutes to read this</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something in textbox to preview it Here"}</p>
            </div>
        </>
    )
}   
