import { stops } from "../data/stops";
import { haversine } from "./haversine";

export const getClosestStops = (position, howMany) => {
  const long = position.coords.longitude;
  const lat = position.coords.latitude;
  const stopsWithDistances = stops.map((stop) => {
    return {
      ...stop,
      distance: haversine({ long, lat }, { long: stop.GpsY, lat: stop.GpsX }),
    };
  });
  const sorted = stopsWithDistances.sort(
    (stopA, stopB) => stopA.distance - stopB.distance
  );
  return sorted.slice(0, howMany);
};
