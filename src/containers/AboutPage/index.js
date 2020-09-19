import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
//{{ lat: 10.7983677, lng: 106.6882456 }}


const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 10.7983677,
    lng: 106.6882456
};


const AboutPage = () => {

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return (
        <div>
            <h1> about us</h1>
            <div style={{ width: "50vw", height: "50vh" }}>
                <LoadScript
                    googleMapsApiKey="AIzaSyCx5QxRFn1bE4uBMgH1NnmRpRfo9iwzLaU"
                >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                    >
                        { /* Child components, such as markers, info windows, etc. */}
                        <></>
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    )
}

export default AboutPage
