import React, { useState, useEffect } from "react"
import "./reviewPage.css"
import SearchComponents from "../components/searchComponents.js"
import {storage} from "../firebase.js"
import {ref,getStorage,getDownloadURL} from "firebase/storage"

export default function ReviewPage({setResult, setSelectRes, result}) {
  const review = {} // this is an object to store each comment
  const [emojiSelect, setEmoji] = useState(0) // setting selected emoji
  console.log(emojiSelect)
  const [commentText, setCommentText] = useState("")
  

  return(<div className="wrapper">
    {/* search component */}
    <p>Enter the store's name</p>
    <SearchComponents setResult={setResult} setSelectRes={setSelectRes} result={result}/>
    {/* emoji card */}
    <p>Select an Emoji for this store</p>
    <div className="emoji-card">
      {/* waiting for setting the state of selection */}
      <img src="https://raw.githubusercontent.com/kritchaiT/stackblitz-hunger-app/main/public/hearteomji.png" alt="heart" className={emojiSelect==1 ? ("heartactive") : ("heartEmoji")} onClick={() => setEmoji(1)}/>
      <img src="https://raw.githubusercontent.com/kritchaiT/stackblitz-hunger-app/main/public/fireEmoji.png" alt="fire" className={emojiSelect==2 ? ("fireactive") : ("fireEmoji")} onClick={() => setEmoji(2)}/>
      <img src="https://raw.githubusercontent.com/kritchaiT/stackblitz-hunger-app/main/public/question-mark-emoji.png" alt="heart" className={emojiSelect==3 ? ("qmarkactive") : ("qmarkEmoji")} onClick={() => setEmoji(3)}/>
    </div>

    <div className="space" />

    {/* commenting session */}
    <p>Leave some Comment</p>
    <div className="comment-wrapper">
      <div className="comment-box">
        <textarea name="comment" className="comment" ></textarea>
      </div>
    </div>

    <div className="space" />

    {/* image session */}


    {/* this is for those who want to give more details */}
    
    <div className="space"></div>

    <div className="button-active">
      <button className="detail-button">Give More Details</button>
    </div>
    <div className="more">
      <img src={} alt="null" />
    </div>
  </div>)
}