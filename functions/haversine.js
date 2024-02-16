export const haversine = (
  { long: lonA, lat: latA },
  { long: lonB, lat: latB }
) => {
  const { PI, sin, cos, atan2 } = Math,
    r = PI / 180,
    R = 6371,
    deltaLat = (latB - latA) * r,
    deltaLon = (lonB - lonA) * r,
    a =
      sin(deltaLat / 2) ** 2 +
      cos(cos(latB * r) * latA * r) * sin(deltaLon / 2) ** 2,
    c = 2 * atan2(a ** 0.5, (1 - a) ** 0.5),
    d = R * c;
  return d;
};
