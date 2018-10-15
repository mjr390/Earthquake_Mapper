

var myMap = L.map("map", {
    center: [39.32, -111.09],
    zoom: 5
  });
  
  // Adding a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(myMap);

// size of dot
function markerSize(population) {
 return population / 40;
} 
  

var meta = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson`
  d3.json(meta, function(error,eData) {
    // console.log(eData.features)
    var dataFeatures = eData.features
    // console.log(dataFeatures)
    for (var i = 0; i < dataFeatures.length; i++) {
        // console.log([dataFeatures[i].geometry.coordinates[0], dataFeatures[i].geometry.coordinates[1]])
        var plotCircles = [dataFeatures[i].geometry.coordinates[1], dataFeatures[i].geometry.coordinates[0]]
        console.log(plotCircles)

        L.circle(plotCircles, {
            fillOpacity: 0.75,
            color: "white",
            fillColor: "purple",
            // Setting our circle's radius equal to the output of our markerSize function
            // This will make our marker's size proportionate to its population
            radius: 20000
          }).addTo(myMap)//.bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>Population: " + cities[i].population + "</h3>").addTo(myMap);
     

}
  });




// var cities = [
//     {
//       name: "Los Angeles",
//       location: [34.0522, -118.2437],
//       population: 3971883
//     },
//     {
//       name: "Omaha",
//       location: [41.2524, -95.9980],
//       population: 446599
//     }
//   ];
// // Loop through the cities array and create one marker for each city object
// for (var i = 0; i < cities.length; i++) {
//     L.circle(cities[i].location, {
//       fillOpacity: 0.75,
//       color: "white",
//       fillColor: "purple",
//       // Setting our circle's radius equal to the output of our markerSize function
//       // This will make our marker's size proportionate to its population
//       radius: markerSize(cities[i].population)
//     }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>Population: " + cities[i].population + "</h3>").addTo(myMap);
//   }


// L.circle([45.52, -122.69], {
//     color: "green",
//     fillColor: "black",
//     fillOpacity: 0.75,
//     radius: 50000
// }).addTo(myMap);  

// var xx = [45.52, -122.69];
// console.log(xx)