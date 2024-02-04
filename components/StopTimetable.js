import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FlatList, Text, View, Button } from "react-native";

export const StopTimetable = ({ id }) => {
  const url = `https://public-sip-api.tw.waw.pl/api/GetLatestPanelPredictions?userCode=WWW&userApiKey=3aAhqA2/*RWsmvy}P8AsxgtFZ&stopId=${id}`;

  const { isPending, data, error, refetch, isRefetching } = useQuery({
    queryKey: [`timetable-${id}`],
    queryFn: () => fetch(url).then((res) => res.json()),
  });

  if (isPending || isRefetching) {
    return <Text>Loading...</Text>;
  }

  const hasData = !(!data || data.length === 0 || error);

  return (
    <View>
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
