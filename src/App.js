import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
//import usePlacesAutocomplete, { getGeocode, getGetLng, } from "use-cases-autocomplete";
//import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import { useMemo } from "react";
import "./App.css";

const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAAHM6DdoT0X2q7U757h5Ls3cxeedeubIc',
    libraries: ["places"],
  });
  const center = useMemo(() => ({ lat: 40.7142700, lng: -74.0059700 }), []);

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        />
      )}
    </div>
  );
};

export default App;