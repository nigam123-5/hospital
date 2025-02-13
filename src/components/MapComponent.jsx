import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import axios from "axios";

const mapContainerStyle = { width: "100%", height: "500px" };

const HospitalMap = ({ coords }) => {
    const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY; // Secure API Key

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    });

    const [hospitals, setHospitals] = useState([]);

    useEffect(() => {
        if (!coords) return;

        const fetchHospitals = async () => {
            try {
                const URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coords.lat},${coords.lng}&radius=5000&type=hospital&key=${GOOGLE_MAPS_API_KEY}`;

                const response = await axios.get(URL);
                setHospitals(response.data.results || []);
            } catch (error) {
                console.error("Error fetching hospitals:", error);
            }
        };

        fetchHospitals();
    }, [coords, GOOGLE_MAPS_API_KEY]);

    if (!isLoaded) return <p>Loading Google Maps...</p>;

    return (
        <GoogleMap mapContainerStyle={mapContainerStyle} center={coords} zoom={14}>
            {hospitals.map((hospital, index) => (
                hospital.geometry?.location && (
                    <Marker key={index} position={hospital.geometry.location} />
                )
            ))}
        </GoogleMap>
    );
};

export default HospitalMap;
