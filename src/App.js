import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="Text Editor" li1="Home" li2="About"/>
    <TextForm heading="Enter The Text To Analyze"/>
    </>
  );
}

export default App;
