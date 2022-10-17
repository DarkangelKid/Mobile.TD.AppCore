import axios from 'axios';

export function getLocation_AIC(latitude, longitude) {
  if (latitude && longitude) {
    return axios.get(`https://apis.wemap.asia/geocode-1/reverse?point.lat=${latitude}&point.lon=${longitude}&key=${apiKeyWeMap}`);
  }
}

export function getLocation(latitude, longitude) {
  if (latitude && longitude) {
    return axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${latitude},${longitude}&key=${apiKeyMaps}&language=vi`,
    );
  }
}
