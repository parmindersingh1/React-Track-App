import React, { useContext } from "react";
import { StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView, NavigationEvents } from "react-navigation";
import { ListItem } from "react-native-elements";
import { Context as TrackContext } from "./../context/TrackContext";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <NavigationEvents onWillFocus={fetchTracks} />
      {/* <Text style={{ fontSize: 48 }}>Track list Screen</Text> */}
      <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TrackDetail", { _id: item._id })
              }
            >
              <ListItem chevron={true} title={item.name} />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

TrackListScreen.navigationOptions = {
  title: "Tracks"
};

const styles = StyleSheet.create({});

export default TrackListScreen;
