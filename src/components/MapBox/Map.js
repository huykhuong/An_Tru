import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

const Map = () => {
  const coordinates = [
    {
      longitude: 106.62674,
      latitude: 10.78296,
    },
  ];

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 15,
  });

  const [selectedLocation, setSelectedLocation] = useState({
    title: "",
    long: 0,
    lat: 0,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/huykhuong/cky9opv7e11wx14qkcxbbdwfk"
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <div>
        <Marker
          longitude={106.62674}
          latitude={10.78296}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <p
            role="img"
            aria-label="push-pin"
            onClick={() =>
              setSelectedLocation({
                title: "Nhà hàng chay An Trú",
                long: 106.62674,
                lat: 10.78296,
              })
            }
            className="cursor-pointer text-2xl animate-bounce"
          >
            📌
          </p>
        </Marker>

        {selectedLocation.long === 106.62674 ? (
          <Popup
            onClose={() => setSelectedLocation({ title: "", long: 0, lat: 0 })}
            closeOnClick={true}
            longitude={106.62674}
            latitude={10.78296}
            className="text-black font-playfair_display w-40 text-center"
          >
            Nhà hàng chay An Trú
          </Popup>
        ) : (
          false
        )}
      </div>
    </ReactMapGL>
  );
};

export default Map;
