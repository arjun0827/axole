//const key="AIzaSyD1n8jCR1x0itDzGAdBOLEx6N_sVymyaZ4";

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export const GoogleMapAPI = withScriptjs(withGoogleMap((props:{isMarkerShown: any}) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
))

