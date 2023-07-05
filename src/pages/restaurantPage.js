import React, {useState} from "react"
import "./restaurantPage.css"
import data from "../components/restaurantLocation.json"

export default function Restaurant(props) {
  const {restaurantName} = props
  const [isVerify, setVerify] = useState(false)
  const checkVerify = () => {
    if(data.features != null) {
      setVerify(true)
    } else {
      setVerify(false)
    }
  }
  console.log(isVerify)
  console.log(restaurantName)
  return(<div className="main">
    <img src="https://firebasestorage.googleapis.com/v0/b/hunger--app.appspot.com/o/default-pic%2FiCanteenbg.webp?alt=media&token=e13eeac1-999d-4f68-b75f-b0cacb4d6b7c" alt="iCanteen" className="backdrop"/>
    <div className="head-container">
      <h1>{restaurantName}</h1>
      <div className="des1">
      <img src="/icons8-home-office/icons8-home-30.png" alt="home" />
      <p>โรงอาหาร</p>
      </div>
    </div>
    <div className="reaction-container">
      <div className="reaction-box">
        <p>Most Recent Reactions</p>
        <div className="reactions">
        <div className="fire-box">
          <img src="https://raw.githubusercontent.com/kritchaiT/stackblitz-hunger-app/main/public/hearteomji.png" alt="heart" id="heart" />
          <h2>3</h2>
        </div>
        <div className="fire-box">
          <img src="https://raw.githubusercontent.com/kritchaiT/stackblitz-hunger-app/main/public/fireEmoji.png" alt="fire" id="fire" />
          <h2>3</h2>
        </div>
        <div className="fire-box">
          <img src="https://raw.githubusercontent.com/kritchaiT/stackblitz-hunger-app/main/public/question-mark-emoji.png" alt="fire" id="question" />
          <h2>3</h2>
        </div>
        </div>
      </div>
    </div>
    
    {/* end header to showing review sessions */}
    <div className="review">
      
    </div>
  </div>)
}