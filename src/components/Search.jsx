import React, { useContext } from 'react'
import {AppContext} from "../App"

function Search() {

 const {location,setLocation,searchLocation} = useContext(AppContext)
  return (
    <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location..."
          type="text" />
      </div>
  )
}

export default Search