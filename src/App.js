import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode,setMode] = useState({
    color : "black",
    backgroundColor : "white"
  })

  const [color,setcolor]=useState()
  const [btn,setbtn]=useState({
    color : "white",
    backgroundColor : "rgb(78, 99, 216)"
  })
  const [textarea,setText]=useState()
  const [aboutText,setAboutText]=useState()
  

  const toggleMode = () =>{
    if(mode.color === "black"){
      setMode(
        {
          color : "white",
          backgroundColor : "black"
          
        },document.body.style.backgroundColor="#818589",setcolor({color : "white"}),setbtn({
          backgroundColor : "#555555"
        }),setText({
          color:"white",
          backgroundColor : "#71797E"
        }),setAboutText({
          backgroundColor : "#696969"
        }))
    }else{
      setMode(
        {
          color : "black",
          backgroundColor : "white"
        },document.body.style.backgroundColor="white",setcolor({color : "black",backgroundColor:"white"}),setbtn({
          color : "white",
          backgroundColor : "rgb(78, 99, 216)"
        }),mode)
    }
  }
  return (
    <>
    <Navbar title="Text Editor" mode={mode} toggleMode={toggleMode} li1="Home" li2="About"/>
    <TextForm heading="Enter The Text To Analyze"mode={mode} textarea = {textarea} color={color} btn={btn}/>
    <About color={color} aboutText = {aboutText}/>
    </>
  );
}

export default App;
