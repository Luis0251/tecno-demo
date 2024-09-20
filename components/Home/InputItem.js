"use client";
import React, { useContext, useEffect } from "react";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { SourceContext } from "@/context/SourceContex";
import { DestinationContext } from "@/context/DestinationContext";

export const InputItem = ({ type }) => {
  const [value, setValue] = React.useState(null);
  const [placeholder, setPlaceholder] = React.useState(null);
  const { source, setSource } = useContext(SourceContext);
  const { destination, setDestination } = useContext(DestinationContext);
  useEffect(() => {
    if (type === "source") {
      setPlaceholder("Direccion de recogida");
    } else {
      setPlaceholder("Destino");
    }
  }, [type]);
  const getLatLng = (place, type) => {
    const placeId = place.value.place_id;
    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );
    service.getDetails({ placeId }, (place, status) => {
      if (status === "OK" && place.geometry && place.geometry.location) {
        console.log(place.geometry.location.lng());
        if (type === "source") {
          setSource({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            name: place.formatted_address,
            label: place.name,
          });
        } else {
          setDestination({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            name: place.formatted_address,
            label: place.name,
          });
        }
      }
    });
  };
  return (
    <div className="bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4 ">
      {type === "source" ? <LocationSearchingIcon /> : <MyLocationIcon />}

      <GooglePlacesAutocomplete
        selectProps={{
          value,
          onChange: (place) => {
            getLatLng(place, type);
            setValue(place);
          },
          placeholder: placeholder,
          isClearable: true,
          className: "w-full",
          components: {
            DropdownIndicator: false,
          },
          styles: {
            control: (provided) => ({
              ...provided,
              backgroundColor: "#00ffff00",
            }),
          },
        }}
      />
    </div>
  );
};
