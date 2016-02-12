// ______________________________________________________________________ \\
// |                                                                    | \\
// | PalMap 0.1 - JavaScript Google Maps Library                        | \\
// |____________________________________________________________________| \\
// |                                                                    | \\
// | Copyright Mahmoud Adly Ezzat (http://thaghry.com)             | \\
// |____________________________________________________________________| \\
// |                                                                    | \\
// | Licensed under Creative Commons Attribution-ShareAlike 4.0         | \\
// | License Details: http://creativecommons.org/licenses/by-sa/4.0/    | \\
// |____________________________________________________________________| \\

var PalMap = {
  labels: [
    {
      title: 'Palestine',
      getPosition: function (zoom) {
        switch(zoom) {
          case 4:
            return new google.maps.LatLng(31.9952985,32.9437028)
          case 5:
            return new google.maps.LatLng(30.7752985,35.5437028)
          case 6:
          case 7:
          case 8:
            return new google.maps.LatLng(31.0052985,34.8437028)
          default:
            return null;
        };
      },
      marker: null,
      getIcon: function (zoom) {
        switch(zoom) {
          case 4:
            return {
              url: './img/palmap/pal_4.png',
              size: new google.maps.Size(48, 12),
              origin: new google.maps.Point(0,0),
              anchor: new google.maps.Point(24, 6)
            }
          case 5:
            return {
                url: './img/palmap/pal_5.png',
                size: new google.maps.Size(80, 20),
                origin: new google.maps.Point(0,0),
                anchor: new google.maps.Point(40, 10)
              }
          case 6:
          case 7:
          case 8:
            return {
              url: './img/palmap/pal_6.png',
              size: new google.maps.Size(80, 20),
              origin: new google.maps.Point(0,0),
              anchor: new google.maps.Point(40, 10)
            }
          default:
            return null;
        } // end switch
      } // end getIcon
    }
  ] // end labels
  ,
  getPalestine: function (map) {

    // draw all labels
    PalMap.drawLabels(map);

    // subscribe to needed events
    google.maps.event.addListener(map, 'zoom_changed', function() {
      PalMap.drawLabels(map);
    });

  } // end getPalestine
  ,
  drawLabels: function (map) {
    var zoom = map.getZoom();
    for (i in PalMap.labels) {
      var label = PalMap.labels[i];
      var icon = label.getIcon(zoom);
      if (icon == null) {
        // no image for this label at this zoom level, hide current if found
        if(label.marker != null) label.marker.setMap(null);
        continue;
      } else {
        if (label.marker != null) {
          label.marker.setMap(map);
          label.marker.setIcon(icon);
          label.marker.setPosition(label.getPosition(zoom));
        }
        else {
          label.marker = new google.maps.Marker({
            position: label.getPosition(zoom),
            map: map,
            title: label.title,
            icon: icon,
            clickable: false
          });
        }
      } // end if
    } // end for
  } // end drawLabels

}; // end PalMap namespace
