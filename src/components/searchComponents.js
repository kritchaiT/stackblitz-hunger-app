import React, {useState} from "react"
import SearchBar from "./searchBar.js"
import SearchResult from "./searchResult.js"
import "./searchComponents.css"

export default function SearchComponents({setResult,setSelectRes,result}) {
  const [confirm, setConfirm] = useState(false)
  console.log(confirm)

  return(<div className="search-bar-container" className={ confirm ? ("disappear") : ("appear") }>
  <SearchBar setResults = {setResult} setConfirm = {setConfirm}/>
  <SearchResult results = {result} setSelectRes = {setSelectRes} setConfirm = {setConfirm}/>
</div>)
}