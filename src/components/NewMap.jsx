
// import React, { useEffect, useRef, useState } from "react";
// import "./NewMap.css";

// const NewMap = () => {
//   const mapRef = useRef(null);
//   const [userLocation, setUserLocation] = useState(null);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
//     script.async = true;
//     script.defer = true;
//     document.head.appendChild(script);

//     script.onload = () => {
//       console.log("Google Maps script loaded successfully.");
//       getUserLocation();
//     };

//     return () => {
//       document.head.removeChild(script);
//     };
//   }, []);

//   const getUserLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const location = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           console.log("User Location:", location);
//           setUserLocation(location);
//           initMap(location);
//         },
//         (error) => {
//           console.error("Error fetching location:", error);
//           alert("Geolocation permission denied. Please allow location access.");
//         }
//       );
//     } else {
//       alert("Geolocation is not supported by your browser.");
//     }
//   };

//   const initMap = (location) => {
//     if (!window.google || !window.google.maps) {
//       console.error("Google Maps API is not loaded yet.");
//       return;
//     }

//     const map = new window.google.maps.Map(mapRef.current, {
//       center: location,
//       zoom: 15,
//     });

//     // Add User Location Marker (Red)
//     new window.google.maps.Marker({
//       position: location,
//       map,
//       title: "Your Location",
//       icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
//     });
//   };

//   return (
//     <div>
//       <button onClick={getUserLocation} style={{ marginBottom: "10px" }}>
//         Get Current Location
//       </button>
//       {userLocation && (
//         <p>
//           <strong>Latitude:</strong> {userLocation.lat} |{" "}
//           <strong>Longitude:</strong> {userLocation.lng}
//         </p>
//       )}
//       <div ref={mapRef} style={{ width: "100%", height: "700px" }} />
//     </div>
//   );
// };

// export default NewMap;






// import React, { useEffect, useRef, useState } from "react";
// import "./NewMap.css";

// const NewMap = () => {
//   const mapRef = useRef(null);
//   const [userLocation, setUserLocation] = useState(null);
//   const [map, setMap] = useState(null);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
//     script.async = true;
//     script.defer = true;
//     document.head.appendChild(script);

//     script.onload = () => {
//       console.log("Google Maps script loaded successfully.");
//       getUserLocation();
//     };

//     return () => {
//       document.head.removeChild(script);
//     };
//   }, []);

//   const getUserLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const location = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           console.log("User Location:", location);
//           setUserLocation(location);
//           initMap(location);
//         },
//         (error) => {
//           console.error("Error fetching location:", error);
//           alert("Geolocation permission denied. Please allow location access.");
//         }
//       );
//     } else {
//       alert("Geolocation is not supported by your browser.");
//     }
//   };

//   const initMap = (location) => {
//     if (!window.google || !window.google.maps) {
//       console.error("Google Maps API is not loaded yet.");
//       return;
//     }

//     const newMap = new window.google.maps.Map(mapRef.current, {
//       center: location,
//       zoom: 15,
//     });

//     setMap(newMap);

//     // Add User Location Marker (Red)
//     new window.google.maps.Marker({
//       position: location,
//       map: newMap,
//       title: "Your Location",
//       icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
//     });

//     // Fetch nearby hospitals
//     fetchNearbyHospitals(newMap, location);
//   };

//   const fetchNearbyHospitals = (map, location) => {
//     if (!window.google || !window.google.maps) {
//       console.error("Google Maps API is not loaded yet.");
//       return;
//     }

//     const service = new window.google.maps.places.PlacesService(map);
//     const request = {
//       location: new window.google.maps.LatLng(location.lat, location.lng),
//       radius: 5000, // 5 km radius
//       type: "hospital",
//     };

//     service.nearbySearch(request, (results, status) => {
//       if (status === window.google.maps.places.PlacesServiceStatus.OK) {
//         results.forEach((hospital) => {
//           new window.google.maps.Marker({
//             position: hospital.geometry.location,
//             map: map,
//             title: hospital.name,
//             icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
//           });
//         });
//       } else {
//         console.error("No hospitals found or Places API error:", status);
//       }
//     });
//   };

//   return (
//     <div>
//       <button onClick={getUserLocation} style={{ marginBottom: "10px" }}>
//         Get Current Location
//       </button>
//       {userLocation && (
//         <p>
//           <strong>Latitude:</strong> {userLocation.lat} |{" "}
//           <strong>Longitude:</strong> {userLocation.lng}
//         </p>
//       )}
//       <div ref={mapRef} style={{ width: "100%", height: "700px" }} />
//     </div>
//   );
// };

// export default NewMap;

// import React, { useEffect, useRef, useState } from "react";
// import "./NewMap.css";

// const NewMap = () => {
//   const mapRef = useRef(null);
//   const [userLocation, setUserLocation] = useState(null);
//   const [map, setMap] = useState(null);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
//     script.async = true;
//     script.defer = true;
//     document.head.appendChild(script);

//     script.onload = () => {
//       console.log("Google Maps script loaded successfully.");
//       getUserLocation();
//     };

//     return () => {
//       document.head.removeChild(script);
//     };
//   }, []);

//   const getUserLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const location = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           console.log("User Location:", location);
//           setUserLocation(location);
//           initMap(location);
//         },
//         (error) => {
//           console.error("Error fetching location:", error);
//           alert("Geolocation permission denied. Please allow location access.");
//         }
//       );
//     } else {
//       alert("Geolocation is not supported by your browser.");
//     }
//   };

//   const initMap = (location) => {
//     if (!window.google || !window.google.maps) {
//       console.error("Google Maps API is not loaded yet.");
//       return;
//     }

//     const newMap = new window.google.maps.Map(mapRef.current, {
//       center: location,
//       zoom: 15,
//     });

//     setMap(newMap);

//     // Add User Location Marker (Red)
//     new window.google.maps.Marker({
//       position: location,
//       map: newMap,
//       title: "Your Location",
//       icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
//     });

//     // Fetch nearby hospitals
//     fetchNearbyHospitals(newMap, location);
//   };

//   const fetchNearbyHospitals = (map, location) => {
//     if (!window.google || !window.google.maps) {
//       console.error("Google Maps API is not loaded yet.");
//       return;
//     }

//     const service = new window.google.maps.places.PlacesService(map);
//     const request = {
//       location: new window.google.maps.LatLng(location.lat, location.lng),
//       radius: 10000, // Increased radius to 10km
//       type: "hospital",
//     };

//     service.nearbySearch(request, (results, status) => {
//       if (status === window.google.maps.places.PlacesServiceStatus.OK) {
//         console.log("Nearby Hospitals:", results);

//         results.forEach((hospital) => {
//           const marker = new window.google.maps.Marker({
//             position: hospital.geometry.location,
//             map: map,
//             title: hospital.name,
//             icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
//           });

//           // Add InfoWindow (Hospital Name)
//           const infoWindow = new window.google.maps.InfoWindow({
//             content: `<div><strong>${hospital.name}</strong><br>Rating: ${hospital.rating || "N/A"}</div>`,
//           });

//           marker.addListener("click", () => {
//             infoWindow.open(map, marker);
//           });
//         });
//       } else {
//         console.error("No hospitals found or Places API error:", status);
//       }
//     });
//   };

//   return (
//     <div>
//       <button onClick={getUserLocation} style={{ marginBottom: "10px" }}>
//         Get Current Location
//       </button>
//       {userLocation && (
//         <p>
//           <strong>Latitude:</strong> {userLocation.lat} |{" "}
//           <strong>Longitude:</strong> {userLocation.lng}
//         </p>
//       )}
//       <div ref={mapRef} style={{ width: "100%", height: "700px" }} />
//     </div>
//   );
// };

// export default NewMap;

// import React, { useEffect, useRef, useState } from "react";
// import "./NewMap.css";

// const NewMap = () => {
//   const mapRef = useRef(null);
//   const [userLocation, setUserLocation] = useState(null);
//   const [map, setMap] = useState(null);
//   const [scriptLoaded, setScriptLoaded] = useState(false);

//   useEffect(() => {
//     // Check if the script is already loaded
//     if (window.google && window.google.maps) {
//       setScriptLoaded(true);
//       return;
//     }

//     const script = document.createElement("script");
//     script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
//     script.async = true;
//     script.defer = true;
//     document.head.appendChild(script);

//     script.onload = () => {
//       console.log("Google Maps script loaded successfully.");
//       setScriptLoaded(true);
//       getUserLocation();
//     };

//     script.onerror = () => {
//       console.error("Failed to load Google Maps script.");
//     };

//     return () => {
//       document.head.removeChild(script);
//     };
//   }, []);

//   const getUserLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const location = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           console.log("User Location:", location);
//           setUserLocation(location);
//           initMap(location);
//         },
//         (error) => {
//           console.error("Error fetching location:", error);
//           alert("Geolocation permission denied. Please allow location access.");
//         }
//       );
//     } else {
//       alert("Geolocation is not supported by your browser.");
//     }
//   };

//   const initMap = (location) => {
//     if (!window.google || !window.google.maps) {
//       console.error("Google Maps API is not loaded yet.");
//       return;
//     }

//     const newMap = new window.google.maps.Map(mapRef.current, {
//       center: location,
//       zoom: 15,
//     });

//     setMap(newMap);

//     // Add User Location Marker (Red)
//     new window.google.maps.Marker({
//       position: location,
//       map: newMap,
//       title: "Your Location",
//       icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
//     });

//     // Fetch nearby hospitals
//     fetchNearbyHospitals(newMap, location);
//   };

//   const fetchNearbyHospitals = (map, location) => {
//     if (!window.google || !window.google.maps) {
//       console.error("Google Maps API is not loaded yet.");
//       return;
//     }

//     const service = new window.google.maps.places.PlacesService(map);
//     const request = {
//       location: new window.google.maps.LatLng(location.lat, location.lng),
//       radius: 10000, // Increased radius to 10km
//       type: "hospital",
//     };

//     service.nearbySearch(request, (results, status) => {
//       if (status === window.google.maps.places.PlacesServiceStatus.OK) {
//         console.log("Nearby Hospitals:", results);

//         results.forEach((hospital) => {
//           const marker = new window.google.maps.Marker({
//             position: hospital.geometry.location,
//             map: map,
//             title: hospital.name,
//             icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
//           });

//           // Add InfoWindow (Hospital Name)
//           const infoWindow = new window.google.maps.InfoWindow({
//             content: `<div><strong>${hospital.name}</strong><br>Rating: ${hospital.rating || "N/A"}</div>`,
//           });

//           marker.addListener("click", () => {
//             infoWindow.open(map, marker);
//           });
//         });
//       } else {
//         console.error("No hospitals found or Places API error:", status);
//       }
//     });
//   };

//   return (
//     <div>
//       <button onClick={getUserLocation} style={{ marginBottom: "10px" }}>
//         Get Current Location
//       </button>
//       {userLocation && (
//         <p>
//           <strong>Latitude:</strong> {userLocation.lat} |{" "}
//           <strong>Longitude:</strong> {userLocation.lng}
//         </p>
//       )}
//       <div ref={mapRef} style={{ width: "100%", height: "700px" }} />
//     </div>
//   );
// };

// export default NewMap;

import React, { useEffect, useRef, useState } from "react";
import "./NewMap.css";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const NewMap = () => {
  const mapRef = useRef(null);
  const [location, setLocation] = useState(null);
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });

          console.log("fetch success")
        },
        (error) => {
          console.error("Error fetching location:", error);
        },
        { enableHighAccuracy: true }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }, []);

  const fetchNearbyHospitals = (lat, lng) => {
    if (!window.google || !window.google.maps || !window.google.maps.places) {
      return;
    }


    const service = new window.google.maps.places.PlacesService(mapRef.current);
    const request = {
      location: new window.google.maps.LatLng(lat, lng),
      radius: 5000,
      type: "hospital",
    };

    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setHospitals(results);
        console.log(`Found ${results.length} hospitals nearby!`);
      } else {
        console.log("Error");
      }
    });
  };

  return (
    <div className="map-main-container">
      <div className="home-container">

        <LoadScript googleMapsApiKey={API_KEY} libraries={["places"]}>
          {location ? (
            <GoogleMap
              center={location}
              zoom={14}
              mapContainerClassName="map"
              onLoad={(map) => {
                console.log("Google Map loaded");
                mapRef.current = map;
                fetchNearbyHospitals(location.lat, location.lng);
              }}
            >
              <Marker position={location} label="You" />
              {hospitals.map((hospital, index) => (
                <Marker
                  key={index}
                  position={{
                    lat: hospital.geometry.location.lat(),
                    lng: hospital.geometry.location.lng(),
                  }}
                />
              ))}
            </GoogleMap>
          ) : (
            <p className="loading-message">Loading map...</p>
          )}
        </LoadScript>
      </div>
    </div>
  );
};

export default NewMap;
