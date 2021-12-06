import React from "react";
import "./Home.css";
import GoogleMapReact from "google-map-react";
import { GeolocatedProps, geolocated } from "react-geolocated";

interface MarkerProps {
  lat: number;
  lng: number;
}

const Marker = (props: MarkerProps) => {
  return <div className="location-pin"></div>;
};

interface HomeProps {}

const Home = (props: HomeProps & GeolocatedProps) => {
  const handleApiLoaded = (map: any, maps: any) => {
    console.log(map);
    console.log(maps);
  };

  if (!props.isGeolocationAvailable) {
    return <div>Your browser does not support Geolocation</div>;
  } else if (!props.isGeolocationEnabled) {
    return <div>Geolocation is not enabled</div>;
  } else if (props.coords) {
    return (
      <div className="home-wrapper">
        <GoogleMapReact
          //bootstrapURLKeys={{ key: "test" }}
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          yesIWantToUseGoogleMapApiInternals
          defaultCenter={{
            lat: props.coords && props.coords.latitude,
            lng: props.coords && props.coords.longitude,
          }}
          defaultZoom={11}
        >
          <Marker lat={props.coords.latitude} lng={props.coords.longitude} />
        </GoogleMapReact>
      </div>
    );
  } else {
    return <div>Getting the location data&hellip; </div>;
  }
};

export default geolocated()(Home);
