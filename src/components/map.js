import React , {useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { Icon } from "leaflet";
import "./map.css"
import data from "./data.json"
import location from "./restaurantLocation.json"
import MarkerClusterGroup from "react-leaflet-cluster"
import {useNavigate} from "react-router-dom"

const markers = location["features"]

export default function MapComponent() {
  const position = [13.7368474, 100.5299] // centre location
  const customIcon = new Icon({
    iconUrl: "https://raw.githubusercontent.com/kritchaiT/stackblitz-hunger-app/main/public/icons8-home-office/icons8-home-30.png", // make static of the icon
    iconSize: [18,18]
  })
  const [darkMode, setDarkMode ] = useState(true) // darkMode setting const
  const navigate = useNavigate()
  const routeChange = () => {
    navigate("/restaurant/icanteen")
  }


  return(<div className="Main">
    <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
        {darkMode ? (<TileLayer 
          attribution="Stadia_AlidadeSmoothDark"
          url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
        />) : (<TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />)}
        {markers.map((marker, idx) => {
          return(
            <Marker key={idx} position={[marker.geometry.coordinates[1],marker.geometry.coordinates[0]]} icon={customIcon}>
              <Popup>
                {("name" in marker.properties) ? (marker.properties.name) : (("name:th" in marker.properties) ? (marker.properties["name:th"]) : (("name:en" in marker.properties) ? (marker.properties["name:en"]) : ("Store id : "+marker.id)))}
                <div className="reaction">
                <div className="fire-box">
                  <img src="https://raw.githubusercontent.com/kritchaiT/stackblitz-hunger-app/main/public/hearteomji.png" alt="heart" id="heart" />
                  <h2>3</h2>
                </div>
                <div className="fire-box">
                  <img src="https://raw.githubusercontent.com/kritchaiT/stackblitz-hunger-app/main/public/fireEmoji.png" alt="fire" id="fire" />
                  <h2>10</h2>
                </div>
                <div className="fire-box">
                  <img src="https://raw.githubusercontent.com/kritchaiT/stackblitz-hunger-app/main/public/question-mark-emoji.png" alt="fire" id="question" />
                  <h2>4</h2>
                </div>
                </div>
                <button onClick={routeChange}>Explore Here</button>
              </Popup> 
            </Marker>
          )
        })}
      </MapContainer>
  </div>)
}

// finding way to enter more names and store location that does not originally exist