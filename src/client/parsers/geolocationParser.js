function geolocationParser(position) {
  if (position) {
    return {
      accuracy: position.coords.accuracy,
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
    };
  }

  return {};
}

export default geolocationParser;
