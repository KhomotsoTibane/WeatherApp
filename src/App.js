import React, { useState, createContext} from 'react'
import axios from "axios"
import Search from "./components/Search"
import Weather from "./components/Weather";
import Footer from "./components/Footer"

export const AppContext = createContext();

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")

  


  // search for the city weather once the enter button has been pressed
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation("")
    }
  }
  return (
    <div className="App">
    <AppContext.Provider value={{location,setLocation,searchLocation,data}}>
      <Search />
      <Weather/>
    </AppContext.Provider>
      <Footer />
    </div>
  );
}

export default App
