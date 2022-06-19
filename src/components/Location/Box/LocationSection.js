import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const LocationSection = (props) => {
  return (
    <Map
      className={"location-map"}
      google={props.google}
      style={{ width: "100%" }}
      zoom={12}
      initialCenter={{
        lat: "32.7767",
        lng: "-96.7970",
      }}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDoOrgbzeip945f1-q5FQRyv9qn3h2XPWw",
})(LocationSection);
