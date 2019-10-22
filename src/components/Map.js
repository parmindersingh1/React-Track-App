import React, { useContext } from "react";
import { StyleSheet, Text, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "./../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation, locations }
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }
  // let points = [];
  // for (let i = 0; i < 20; i++) {
  //   if (i % 2 === 0) {
  //     points.push({
  //       latitude: 30.705080 + i * 0.001,
  //       longitude: 76.762020 + i * 0.001
  //     });
  //   } else {
  //     points.push({
  //       latitude: 30.705080 - i * 0.002,
  //       longitude: 76.762020 + i * 0.001
  //     });
  //   }
  // }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        // latitude: 30.70508,
        // longitude: 76.76202,
        ...currentLocation.coords,
        latitudeDelta: 0.01, //zoomlevel
        longitudeDelta: 0.01 //zoomlevel
      }}
      // region={{  }}
      //   ...currentLocation.coords,
      //   latitudeDelta: 0.01, //zoomlevel
      //   longitudeDelta: 0.01 //zoomlevel
      // }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.3)"
      />
      <Polyline coordinates={locations.map(loc => loc.coords)} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;
