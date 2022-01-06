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
        navigator.vibrate(200);
        if (text.length === 0) {
            props.showalert("warning" , "Enter Text in Textbox First");
        }

    }

    const handellowclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert("success" , "Converted in lowercase");
        navigator.vibrate(200);
        if (text.length === 0) {
            props.showalert("warning" , "Enter Text in Textbox First");
        }
    }
    
    const handelclearclick = () => {
        let newtext = "";
        setText(newtext);
        props.showalert("success" , "Textbox clear");
        navigator.vibrate(200);
        if (text.length === 0) {
            props.showalert("warning" , "Enter Text in Textbox First");
        }
    }
    
    const handelcopyclick = () => {
        navigator.clipboard.writeText(text);
        props.showalert("success" , "Text copied in Clipboard");
        navigator.vibrate(200);
        if (text.length === 0) {
            props.showalert("warning" , "Enter Text in Textbox First");
        }
    }
    
    const handelreplaceextraspaceclick = () => {
        let newsstr = text.split(/[ ]+/);
        setText(newsstr.join(" "));
        props.showalert("success" , "Removed extra spaces from your Text");
        navigator.vibrate(200);
        if (text.length === 0) {
            props.showalert("warning" , "Enter Text in Textbox First");
        }
    }

    const handelcapitalfirstclick = () => {
        let uppercaseword = "";
        let wordslet = text.toLowerCase();
        let word = wordslet.split(" ");
        word.forEach(element => {
            uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " ";
            setText(uppercaseword);
        });
        props.showalert("success" , "All first letter of word is capitalized");
        navigator.vibrate(200);
        if (text.length === 0) {
            props.showalert("warning" , "Enter Text in Textbox First");
        }
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
                <p className='my-2'>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Words and {text.length} Characters </p>
                <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length * 0.008} Minutes to read this</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to Preview!"}</p>
            </div>
        </>
    )
}   
