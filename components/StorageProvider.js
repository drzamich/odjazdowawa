import constate from "constate";
import { produce } from "immer";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "odjazdowawa-storage";

const initialStorage = {
  favs: [],
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("Cannot get storage");
    console.log(e);
  }
};

const saveData = async (data) => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (e) {
    console.log("Fav not added");
    console.log(e);
  }
};

export const [StorageProvider, useStorage] = constate(() => {
  const [storage, setStorage] = useState(initialStorage);
  console.log(storage);

  useEffect(() => {
    const setUp = async () => {
      const data = await getData();
      if (data) {
        setStorage(data);
      }
    };
    setUp();
  }, []);

  useEffect(() => {
    saveData(storage);
  }, [storage]);

  const addFav = (favId) => {
    const nextStorage = produce(storage, (draft) => {
      if (!storage.favs.includes(favId)) {
        draft.favs = [...storage.favs, favId];
      }
    });
    setStorage(nextStorage);
  };

  const removeFav = (favId) => {
    const nextStorage = produce(storage, (draft) => {
      draft.favs = storage.favs.filter((id) => id !== favId);
    });
    setStorage(nextStorage);
  };

  return {
    favs: storage.favs,
    addFav,
    removeFav,
  };
});
