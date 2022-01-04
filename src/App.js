
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Contact from './components/Contact';
import Textform from './components/Textform';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null);
  const showalert = (type, massage) => {
    setalert({
      type: type,
      msg: massage
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.backgroundColor = "rgb(71, 78 ,84)";
      showalert("success", "Dark mode Enable");
    }
    else {
      setmode("light")
      document.body.style.backgroundColor = "white";
      showalert("success", "Light mode Enable");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" togglemode={togglemode} mode={mode} />
        <Alert alert={alert}/>
        <div className='container my-3'>
          <Switch>
            <Route path="/contact">
              <Contact mode={mode}/>
            </Route>
            <Route path="/">
              <Textform heading="Enter your text Here for analyze" mode={mode} showalert={showalert} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
