import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useStorage } from "./StorageProvider";
import { StopTimetable } from "./StopTimetable";

export const Favs = () => {
  const { favs, removeFav } = useStorage();

  if (favs && favs.length)
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Favourites</Text>
        {favs.map((fav) => (
          <View key={fav}>
            <StopTimetable id={fav} />
            <Button title="Remove fav" onPress={() => removeFav(fav)} />
          </View>
        ))}
      </View>
    );
};

export const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  header: {
    fontSize: 20,
    marginBottom: 5,
  },
});
