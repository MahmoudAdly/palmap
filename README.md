PalMap
=========

A javascript library to get Palestine back on Google Maps. Licensed under Creative Commons Attribution-ShareAlike 4.0 ([license details]).

[![PalMap Example](https://raw.githubusercontent.com/MahmoudAdly/palmap/master/img/example.png)](http://palmap.thaghry.com/)

Installation
--------------
1- Make sure you get these files and add them in similar directories.
* js/palmap.js
* img/palmap/

2- Include *palmap.js* in your html file.
```
<script src="js/palmap.js"></script>
```

3- After your Google Maps initialization code, call PalMap library with the map object.
```
PalMap.getPalestine(map);
```

4- Congratulations! Palestine is back on your Google Map.

Example
----------
```
<script>
  // your normal Google Maps code
  function initialize() {
    var mapOptions = {
      zoom: 7,
      center: new google.maps.LatLng(30.9001985,34.8437028)
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    // get palestine labels back to google map
    PalMap.getPalestine(map);
  }
  google.maps.event.addDomListener(window, 'load', initialize);
</script>
```
[View live example]

[license details]: http://creativecommons.org/licenses/by-sa/4.0/
[View live example]: http://palmap.thaghry.com/
