export const getNearbyStations = (latitude, longitude) => {
    // In real case, you can integrate a third-party API here
    return [
      { id: 1, name: "Central Police Station", distance: "1.2 km" },
      { id: 2, name: "North End Police Station", distance: "2.5 km" },
      { id: 3, name: "Downtown Police Post", distance: "3.1 km" },
    ];
  };