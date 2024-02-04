import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { StopTimetable } from "./StopTimetable";
import { StopSelect } from "./StopSelect";

export const Main = () => {
  const [curSelStopId, setCurSelStopId] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Siemanko</Text>
      <StopSelect
        setCurSelStopId={setCurSelStopId}
        curSelStopId={curSelStopId}
      />
      {curSelStopId ? (
        <StopTimetable id={curSelStopId} key={curSelStopId} />
      ) : null}
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 30,
  },
  header: {
    fontSize: 30,
    textDecorationLine: "underline",
  },
});
