import React from "react"
import Navbar from "./Navbar1.jsx"
import Main from "./Main1.jsx"

export default function App() {
    const[darkMode,setdarkmode] = React.useState(true)
    function toggleDarkMode(){
        setdarkmode(prev=>!prev)
    }
    return (
        <div className="container">
            <Navbar 
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            />
            <Main 
             darkMode={darkMode}/>
        </div>
    )
}