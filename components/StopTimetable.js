import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FlatList, Text, View } from "react-native";

export const StopTimetable = ({ id }) => {
  const url = `https://public-sip-api.tw.waw.pl/api/GetLatestPanelPredictions?userCode=WWW&userApiKey=3aAhqA2/*RWsmvy}P8AsxgtFZ&stopId=${id}`;

  const { isPending, data } = useQuery({
    queryKey: [`timetable-${id}`],
    queryFn: () => fetch(url).then((res) => res.json()),
  });

  if (isPending) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item: { Line, Destination, Arrival } }) => (
          <Text>{`${Line} | ${Destination} | ${Arrival}`}</Text>
        )}
      />
    </View>
  );
};
