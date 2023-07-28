
import './App.css';
import Alert from './components/Alert';
import Nabar from './components/Nabar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
// import About from './components/About';
// import {//
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";
// import { Routes ,Route } from 'react-router-dom';

// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const [mode, setmode] = useState('light')
  // const [mode1, setmode1] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert= (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  
  }


  const toggleMode = () =>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled","success")
      document.title ='TextUtils - DarkMode';
      // setInterval(()=>{
      //   document.title ='TextUtils is Amazing';
      // },2000);
      // setInterval(()=>{
      //   document.title ='Install TextUtils Now';
      // },1500);
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success")
      document.title ='TextUtils - LightMode';
    }
  }

  // const toggleMode1 = () =>{
  //   if(mode1 === 'light'){
  //     setmode1('red')
  //     document.body.style.backgroundColor = 'red';
  //     // showAlert("Dark Mode has been enabled","success")
  //   }
  //   else{
  //     setmode1('light')
  //     document.body.style.backgroundColor = 'white';
  //     // showAlert("Light Mode has been enabled","success")
  //   }
  // }
  return (
    <>
 {/* <Router> */}
{/* <Nabar title = "TextUtils" aboutText = "About_TextUtils" mode={mode} toggleMode = {toggleMode} mode1={mode1} toggleMode1={toggleMode1}/> */}
<Nabar title = "TextUtils" aboutText = "About_TextUtils" mode={mode} toggleMode = {toggleMode} />

<Alert alert={alert}/>
  <div className="container my-3">
    {/* <Routes> */}
      {/* user ----> Component1 
      user/home ----> component2 */}
          {/* <Route exact path="/about" element ={<About />}> */}
            {/* <About /> */}
          {/* </Route> */}
          
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text to Analyze"mode={mode} />} > */}
          {/* </Route> */}
    {/* </Routes> */}
    <TextForm showAlert={showAlert} heading="Enter The Text to Analyze"mode={mode} />
  </div>
{/* </Router> */}

  </> 
   
  );
}

export default App;
