import React, {useState} from 'react'
// import PropTypes from 'prop-types'



export default function TextForm(props) {
    const hanldeupClick = ()=>{
        // console.log("Uppercase was clicked " +text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text has been successfully conert ted to upper Case!","Success");
    }

    const hanldeloClick = ()=>{
      // console.log("Uppercase was clicked " +text)
      let newText = text.toLocaleLowerCase();
      setText(newText)
      props.showAlert("Text has been successfully conert ted to lower Case!","Success");
  }

  const hanldedownloadClick = () => {
    // Create a Blob object with the text content
    const blob = new Blob([text], { type: 'text/plain' })

    // Create a temporary URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create an ahsan element to trigger the download
    const ahsan = document.createElement('a')
    ahsan.href = url;
    ahsan.download = 'my_text_file.txt'

    // Simulate a click on the ahsan element to trigger the download
    ahsan.click()

    // Release the allocated resources for the temporary URL
    URL.revokeObjectURL(url)
    props.showAlert("Text has been successfully Downloaded!","Success");
  }

    const hanldeonChange = (event)=>{
        // console.log("on change")
        setText(event.target.value)
    }

    const handleCopy = ()=>{
      var text = document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text has been successfully Copyed!","Success");
    }



    const [text, setText] = useState("");
  return (
    <>
    <div className="container my-3"style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={hanldeonChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick = {hanldeupClick}>Conert to upper case</button>
        <button className="btn btn-primary mx-2" onClick = {hanldeloClick}>Conert to lower case</button>
        <button className="btn btn-primary mx-2" onClick = {hanldedownloadClick}>Download text</button>
        <button className="btn btn-primary mx-2" onClick = {handleCopy}>Copy text</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes required to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the above textbox to preview it."}</p>

    </div>
    </>
  )
}
