import React, { useState, useEffect } from "react"
import "./reviewPage.css"
import SearchComponents from "../components/searchComponents.js"
import {storage} from "../firebase.js"
import {ref,getStorage,getDownloadURL,uploadBytes, listAll} from "firebase/storage"
import { v4 } from "uuid"

export default function ReviewPage({setResult, setSelectRes, result}) {
  const review = {} // this is an object to store each comment
  const [emojiSelect, setEmoji] = useState(0) // setting selected emoji
  console.log(emojiSelect)
  const [commentText, setCommentText] = useState("")
  const nullimg = ref(storage, 'default-pic/review-session.png')
  // image session upload
  const [imageUplaod, setImageUpload] = useState(null)
  const UploadImg = () => {
    if (imageUplaod == null) return;
    const imgref = ref(storage, `images/${imageUplaod.name + v4()}`)
    uploadBytes(imgref, imageUplaod).then(() => {
      alert("Image Uploaded")
    })
  }

  useEffect(() => {

  }, [])
  

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
    <div className="img-wrapper">
      <img src={"https://firebasestorage.googleapis.com/v0/b/hunger--app.appspot.com/o/default-pic%2Freview-session.png?alt=media&token=57b6cbbc-0710-42b9-afe5-8fb896524307"} alt="nullimg" className="def-img" />
      <input type="file" onChange={(event) => {setImageUpload(event.target.files[0])}} className="input"/>
      <button onClick={UploadImg}>Uploaded</button>
    </div>

    {/* this is for those who want to give more details */}
    
    <div className="space"></div>

    <div className="button-active">
      <button className="detail-button">Give More Details</button>
      <button className="detail-button">POST</button>
    </div>
    <div className="more">
      
    </div>
  </div>)
}