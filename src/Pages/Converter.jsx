import React, { useState } from 'react';
export default function Converter() {
  const handleUpClick = () => {

    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLowClick = () => {

    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleClearClick = () => {

    let newText = (" ");
    setText(newText)
  }



  const handleCopyText = () => {
    const text = document.getElementById('myBox');
    text.select();
    document.execCommand("copy")
  }



  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    }



  const handleOnChange = (event) => {
    setText(event.target.value);


  }

  const [text, setText] = useState("");


  return (
    <>
      <div>
        <h1>Convert to uppercase</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6" placeholder="Enter the text to convert"></textarea>


        </div>
        <button className="btn btn-primary" onClick={handleUpClick} >Convert Uppercase</button>

        <button className="btn btn-info mx-3" onClick={handleLowClick} >Convert Lowercase</button>




        <button className="btn btn-success my-3" onClick={handleCopyText} >Copy</button>



        <button className="btn btn-dark mx-3 my-3" onClick={handleExtraSpaces} >Remove extra spaces</button>


        <button className="btn btn-danger my-3" onClick={handleClearClick} >Clear</button>






      </div>
      <div className="container my-4">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>

        <h2 className="my-3">Preview</h2>

        <div className="textPreview">
          <p>{text}</p>
        </div>


      </div>
    </>
  )
}