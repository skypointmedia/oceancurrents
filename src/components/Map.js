import React from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import { formatRelative } from 'date-fns'
import {usePosition} from './UsePosition';
import mapStyles from './mapStyles'
const libraries = ["places"]

function Map() {
      
      //Load initial map
      const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries
      })

      //Get Lat/Lon
      const {latitude, longitude, error} = usePosition();

      //fresh duds
      const mapContainerStyle ={
        width:'100vw',
        height:'100vh'
      }
      //Center the map
      const center ={
        lat: latitude,
        lng: longitude,
      }
      //Map options
      const options = {
        styles: mapStyles,
        disableDefaultUI: true,
        zoomControl:true,
      }
    
      if (loadError) return "Error loading maps"
      if (!isLoaded) return "Loading Maps" 

    return (
        <>
        <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        zoom={17} 
        center={center} 
        options={options} />
        </>
    )
}

export default Map