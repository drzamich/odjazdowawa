import React from "react";
import { Button } from "react-native";
import { useStorage } from "./StorageProvider";

export const AddToFavButton = ({ curSelStopId }) => {
  const { addFav } = useStorage();
  return <Button title="Add to favs" onPress={() => addFav(curSelStopId)} />;
};
