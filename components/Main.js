import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import { StopTimetable } from "./StopTimetable";
import { StopSelect } from "./StopSelect";
import { AddToFavButton } from "./AddToFavButton";
import { Favs } from "./Favs";
import { Closest } from "./Closest";

export const Main = () => {
  const [curSelStopId, setCurSelStopId] = useState(null);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>Siemanko</Text>
        <StopSelect
          setCurSelStopId={setCurSelStopId}
          curSelStopId={curSelStopId}
        />
        {curSelStopId ? (
          <>
            <StopTimetable
              id={curSelStopId}
              key={curSelStopId}
              showName={false}
            />
            <AddToFavButton curSelStopId={curSelStopId} />
          </>
        ) : null}
        <Closest />
        <Favs />
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  header: {
    fontSize: 30,
    textDecorationLine: "underline",
    marginBottom: 5,
  },
});
