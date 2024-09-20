import React, { useContext, useEffect } from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { SourceContext } from "@/context/SourceContex";
import { DestinationContext } from "@/context/DestinationContext";
export const GoogleMapSection = () => {
  const containerStyle = {
    width: "100%",
    height: window.innerHeight * 0.8,
  };

  // const center = {
  //   lat: -3.745,
  //   lng: -38.523,
  // };
  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  // });

  const [map, setMap] = React.useState(null);
  const [center, setCenter] = React.useState({ lat: -3.745, lng: -38.523 });
  const { source, setSource } = useContext(SourceContext);
  const { destination, setDestination } = useContext(DestinationContext);

  useEffect(() => {
    if (source?.length != [] && map) {
      map.panTo({
        lat: source.lat,
        lng: source.lng,
      });
      setCenter({
        lat: source.lat,
        lng: source.lng,
      });
    }
  }, [source]);

  useEffect(() => {
    if (destination?.length != [] && map) {
      setCenter({
        lat: destination.lat,
        lng: destination.lng,
      });
    }
  }, [destination]);
  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ mapId: "8779f7d44f1f010f" }}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {source.length != [] ? (
        <MarkerF position={{ lat: source.lat, lng: source.lng }} />
      ) : null}

      <MarkerF position={{ lat: destination.lat, lng: destination.lng }} />
    </GoogleMap>
  );
};
