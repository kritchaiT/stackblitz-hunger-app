import React, {useState} from "react"
import { FaSearch, FaCheck} from "react-icons/fa";
import { FiCheck } from "react-icons/fi"
import "./searchBar.css"


export default function SearchBar({ setResults, setConfirm }) {
  const [input, setInput] = useState("")
  var data = require('./search.json')
  const filterData = (value) => {
    const result = data.filter((store) => {
      return store.name.includes(value) || store.name.toLowerCase().includes(value)
    })
    setResults(result)
  }
  const handleChange = (value) => {
    setInput(value);
    filterData(input)
  }

  return(
    <div className="searchBar">
      <div className="input-wrapper">
    <FaSearch id="search-icon" />
    <input 
      placeholder="Search your restaurants"
      value ={input}  
      onChange={(e) => handleChange(e.target.value)}
    />
    </div>
    <button onClick={() => 
    setConfirm(true)} className="confirmButton">
      <FaCheck />
    </button>
  </div>
  )
}