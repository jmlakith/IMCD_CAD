var locations = [
      ['Tharindu', 7.0917, 79.9997, 4 ,'2014-6-6 13:55'],
      ['Viraj', 7.4833, 80.3667,5,'2014-6-7 12:55'],
      ['Jerome', -34.028249, 151.157507, 3,'2014-6-6 13:55'],
      ['Anuradha', -33.80010128657071, 151.28747820854187, 2,'2014-6-7 3:55'],
      ['Sumedha', -33.950198, 151.259302, 1,'2014-6-6 5:55']
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: new google.maps.LatLng(7.4833, 80.3667),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]+" Last Updated "+locations[i][4]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }