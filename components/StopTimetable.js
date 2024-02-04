import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FlatList, Text, View, Button } from "react-native";
import { stops } from "../data/stops";

export const StopTimetable = ({ id, showName = true }) => {
  const url = `https://public-sip-api.tw.waw.pl/api/GetLatestPanelPredictions?userCode=WWW&userApiKey=3aAhqA2/*RWsmvy}P8AsxgtFZ&stopId=${id}`;

  const { isPending, data, error, refetch, isRefetching } = useQuery({
    queryKey: [`timetable-${id}`],
    queryFn: () => fetch(url).then((res) => res.json()),
  });

  if (isPending || isRefetching) {
    return <Text>Loading...</Text>;
  }

  const name = stops.find((stop) => stop.StopId === id).Name;

  const hasData = !(!data || data.length === 0 || error);

  return (
    <View>
      {showName ? <Text>{name}</Text> : null}
      {hasData ? (
        <FlatList
          data={data}
          renderItem={({ item: { Line, Destination, Arrival } }) => (
            <Text>{`${Line} | ${Destination} | ${Arrival}`}</Text>
          )}
        />
      ) : null}
      <Button onPress={refetch} title="Refresh" />
    </View>
  );
};
