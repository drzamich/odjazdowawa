import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StopTimetable } from "./StopTimetable";
import { getClosestStops } from "../functions/getClosestStops";

export const Closest = () => {
  const [closest, setClosest] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const closestIds = getClosestStops(position, 3).map(
        ({ StopId }) => StopId
      );
      setClosest(closestIds ?? []);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Closest</Text>
      {closest.length === 0 ? <Text>Locating your possition...</Text> : null}
      {closest.map((fav) => (
        <View key={fav}>
          <StopTimetable id={fav} />
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
