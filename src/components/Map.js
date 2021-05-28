import React from 'react'
import { GoogleMap, 
    useLoadScript, 
    Marker, 
    InfoWindow } from '@react-google-maps/api'

import {formatRelative} from 'date-fns'
import mapStyles from './mapStyles'

const libraries = ["places"]


function Map() {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
      })

      const mapContainerStyle ={
        width:'100vw',
        height:'100vh'
      }
      const center ={
        lat: 28.185654,
        lng: -82.680748
      }
      const options = {
        styles: mapStyles,
        disableDefaultUI: true,
        zoomControl:true,
      }
    
      if (loadError) return "Error loading maps"
      if (!isLoaded) return "Loading Maps" 

    return (
        <>
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={12} center={center} options={options} />
        </>
    )
}

export default Map
