

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

  var changeColor = function(mag){

    if(mag <=1 ){
      dotColor = 'green';
    } else if(mag > 1 && mag <= 2){
        dotColor = 'yellowgreen';
    } else if(mag > 2 && mag <= 3 ){
        dotColor = 'yellow';
    }else if(mag > 3 && mag <= 4 ){
        dotColor = 'orange';
    }else if(mag > 4 && mag <= 5 ){
        dotColor = 'red';
    }else if(mag > 5){
        dotColor = 'darkred';
    }
    return dotColor
  
  }; 



var meta = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson`
  d3.json(meta, function(error,eData) {
    // console.log(eData.features)
    var dataFeatures = eData.features
    // console.log(dataFeatures)
    for (var i = 0; i < dataFeatures.length; i++) {
        // console.log([dataFeatures[i].geometry.coordinates[0], dataFeatures[i].geometry.coordinates[1]])
        var plotCircles = [dataFeatures[i].geometry.coordinates[1], dataFeatures[i].geometry.coordinates[0]]
        // console.log(plotCircles)

        L.circle(plotCircles, {
            fillOpacity: 0.75,
            color: "clear",
            fillColor: changeColor(dataFeatures[i].properties.mag),
            // Setting our circle's radius equal to the output of our markerSize function
            // This will make our marker's size proportionate to its population
            radius: dataFeatures[i].properties.mag * 10000
          }).bindPopup("MAGNITUDE: " + dataFeatures[i].properties.mag + "\nLOCATION: " + dataFeatures[i].properties.place).addTo(myMap);
     

}
  });




