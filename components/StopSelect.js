import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import Picker from "react-native-ui-lib/picker";

import { stops } from "../data/stops";

const parseAndFilterStops = (search) => {
  const filtered = stops
    .filter((stop) => stop.Name.toLowerCase().includes(search.toLowerCase()))
    .map((stop) => ({
      label: stop.Name,
      value: stop.StopId,
    }));

  if (filtered.length) {
    return filtered;
  }
  return null;
};

export const StopSelect = ({ curSelStopId, setCurSelStopId }) => {
  const [searchStr, setSearchStr] = useState("");

  const parsedAndFilteredStops = parseAndFilterStops(searchStr);

  return (
    <View style={styles.container}>
      <Picker
        items={parsedAndFilteredStops}
        placeholder="Select stop"
        value={curSelStopId}
        showSearch={true}
        useSafeArea={true}
        onChange={setCurSelStopId}
        onSearchChange={setSearchStr}
        renderPicker={(selectedItem, itemLabel) => {
          const label = itemLabel ?? "Wybierz przystanek";
          return <Text style={styles.picker}>{label} 🔎</Text>;
        }}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  picker: {
    fontSize: 20,
    fontWeight: 800,
    backgroundColor: "lightgray",
    padding: 5,
  },
});
