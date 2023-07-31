import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState({
    color: "black",
    backgroundColor: "white"
  })

  const [color, setcolor] = useState()
  const [btn, setbtn] = useState({
    color: "white",
    backgroundColor: "rgb(78, 99, 216)"
  })
  const [textarea, setText] = useState()
  const [aboutText, setAboutText] = useState()
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
  }
  const toggleMode = () => {
    if (mode.color === "black") {
      setMode(
        {
          color: "white",
          backgroundColor: "black"

        }, document.body.style.backgroundColor = "#818589", setcolor({ color: "white" }), setbtn({
          backgroundColor: "#555555"
        }), setText({
          color: "white",
          backgroundColor: "#71797E"
        }), setAboutText({
          backgroundColor: "#696969"
        }))
      showAlert("Dark Mode has been Enabled", "rgb(174, 255, 174)")
    } else {
      setMode(
        {
          color: "black",
          backgroundColor: "white"
        }, document.body.style.backgroundColor = "white", setcolor({ color: "black", backgroundColor: "white" }), setbtn({
          color: "white",
          backgroundColor: "rgb(78, 99, 216)"
        }), mode)
      showAlert("Ligth Mode has been Enabled", "rgb(174, 255, 174)")
    }
  }

  const Blue = () => {
      setMode(
        {
          color: "white",
          backgroundColor: "#4169e1"

        }, document.body.style.backgroundColor = "#1e90ff", setcolor({ color: "white" }), setbtn({
          backgroundColor: "#191970"
        }), setText({
          color: "white",
          backgroundColor: "#b0c4de"
        }), setAboutText({
          backgroundColor: "#696969"
        }))
  }

const Purpal = () => {
    setMode(
      {
        color: "white",
        backgroundColor: "#ba55d3"

      }, document.body.style.backgroundColor = "#9370db", setcolor({ color: "white" }), setbtn({
        backgroundColor: "#663399"
      }), setText({
        color: "white",
        backgroundColor: "#d8bfd8"
      }), setAboutText({
        backgroundColor: "#696969"
      }))
}

const cyan = () => {
    setMode(
      {
        color: "#00ffff",
        backgroundColor: "#009698"

      }, document.body.style.backgroundColor = "black", setcolor({ color: "#00ffff" }), setbtn({
        backgroundColor: "#008b8b",
        color:"#00ffff"
      }), setText({
        color: "#00ffff",
        backgroundColor: "#e0ffff"
      }), setAboutText({
        backgroundColor: "#696969"
      }))
}



return (
  <>
    <Navbar title="Text Editor" mode={mode} toggleMode={toggleMode} li1="Home" li2="About" />
    <Alert alert={alert} />
    <TextForm heading="Enter The Text To Analyze" mode={mode} textarea={textarea} color={color} btn={btn} blue={Blue} Purpal={Purpal} cyan={cyan} />
    <About color={color} aboutText={aboutText} />
  </>
);
}

export default App;
