import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
  GoogleApiWrapper
} from "react-google-maps";
import Navbar from "./Navbar"
import * as parksData from "./data/places.json"
import mapStyles from "./mapStyles"


function Map(){
    const [selectedLocation,setSelectedLocation] = useState(null);

    return (
        <GoogleMap
            defaultZoom={3} 
            defaultCenter={{lat:52.92485819601727, lng:-19.413024752707063}}
            defaultOptions={{styles: mapStyles}}
        >
          {parksData.features.map(location => (
        <Marker
          key={location.properties.PARK_ID}
          position={{
            lat: location.geometry.coordinates[1],
            lng: location.geometry.coordinates[0]
          }}
          onClick={()=>{
            setSelectedLocation(location);
        
            }}
           
          />
          ))}

          {selectedLocation && (
              <InfoWindow position={{
                lat: selectedLocation.geometry.coordinates[1],
                lng: selectedLocation.geometry.coordinates[0]
              }}
              onCloseClick={() =>{
                setSelectedLocation(null);
            }}
              >
                  <div>
                      <h2>{selectedLocation.properties.NAME}</h2>
                      <h2>{selectedLocation.properties.DESCRIPTIO}</h2>
                  </div>
              </InfoWindow>
          )}
        </GoogleMap>
    );
}
const MapWrapped = withScriptjs(withGoogleMap(Map));

const Portfolio = () => {
    return (
        <>
            <Navbar />
           <div style={{ width: "100vw", height: "100vh" }}>
           <MapWrapped googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDZXIqq4Ef3KYsOIHdCl9Hj9I6wF1-H94s`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
           </div>
        </>
    );
};

export default Portfolio;
