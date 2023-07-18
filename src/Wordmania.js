import React, {useState} from 'react'


export default function Wordmania(props) {
   const handleUpClick = () => {
    let newText= text.toUpperCase();
    setText(newText);
    }
     const handleUpClick2 = () => {
    let newText= text.toLowerCase();
    setText(newText);
    }
    const handleUpClick3 = () => {
    let newText= "";
    setText(newText);
    }
    
    const handleUpClick4 =()=>{
     let newText="LAUDA LE LE MERA"
      setText(newText);
    }

    const handleOnChange = (event) =>{
      setText(event.target.value)
    }
    
    const copy =() =>{
      var texxt= document.getElementById("exampleFormControlTextarea1");
      texxt.select();
      texxt.setSelectionRange(0,9999);
      navigator.clipboard.writeText(texxt.value);
      document.getSelection().removeAllRanges();
    }

    const [text,setText] = useState("Enter text here");
  return (
   
<div>
    <h4 className='container m-4' style={{color: props.mode===`light`?`black`:`white`} }>{props.heading} </h4>
        <div className="mb-3">
            <textarea className="form-control" value={text}  onChange={handleOnChange} style={{color: props.mode===`light`?`black`:`white` ,backgroundColor: props.mode===`light`?`white`:`#1a2452`} } id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button  className='btn btn-primary m-4' disabled={text.length===0} onClick={handleUpClick}> UPPERCASE </button>
        <button  className='btn btn-primary' disabled={text.length===0}  onClick={handleUpClick2}> LOWERCASE </button>
         <button  className='btn btn-primary m-4' disabled={text.length===0}  onClick={copy}> COPY </button>
        <button  className='btn btn-primary ' disabled={text.length===0}  onClick={handleUpClick3}> CLEAR </button>
         <button  className='btn btn-primary m-4 '  onClick={handleUpClick4}> RANDOM WORD </button>
        <div className="wordcount container" style={{color: props.mode===`light`?`black`:`white`} }>
          <h4>text summary</h4>
          <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        </div>
        <div className="container" style={{color: props.mode===`light`?`black`:`white`} }>
          <h2>preview</h2>
          <p>{text}</p>
        </div>
</div>
    
  )
}
