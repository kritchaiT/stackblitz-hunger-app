import React from "react"
import "./searchResult.css"

export default function SearchResult({results, setSelectRes}) {
  return (
    <div className="result-search">
      {results.map((result, id) => {
        return <div key={id} className="search-result" onClick={(e) => setSelectRes(result.name)}>{result.name}</div>
      })}
    </div>
  )
}