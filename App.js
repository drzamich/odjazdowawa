import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { StopTimetable } from "./StopTimetable";
import { StopSelect } from "./StopSelect";

const queryClient = new QueryClient();

export default function Wrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}

export const App = () => {
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
    backgroundColor: "lightblue",
    padding: 30,
  },
  header: {
    fontSize: 30,
    textDecorationLine: "underline",
  },
});
