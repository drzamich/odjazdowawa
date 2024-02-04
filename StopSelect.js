import React, { useState } from "react";
import Picker from "react-native-ui-lib/picker";

import { stops } from "./stops";

const parseAndFilterStops = (search) => {
  return stops
    .filter((stop) => stop.Name.toLowerCase().includes(search.toLowerCase()))
    .map((stop) => ({
      label: stop.Name,
      value: stop.StopId,
    }));
};

export const StopSelect = ({ curSelStopId, setCurSelStopId }) => {
  const [searchStr, setSearchStr] = useState("");

  const parsedAndFilteredStops = parseAndFilterStops(searchStr);

  return (
    <Picker
      items={parsedAndFilteredStops}
      placeholder="Select stop"
      value={curSelStopId}
      showSearch={true}
      useSafeArea={true}
      onChange={setCurSelStopId}
      onSearchChange={setSearchStr}
    />
  );
};
