var ContactPage = function () {

    return {
        
    	//Basic Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				lat: 6.981500,
				lng: 81.077604
			  });
			  
			  var marker = map.addMarker({
				lat: 6.981500,
				lng: 81.077604,
	            title: 'Company, Inc.'
		       });
			});
        },

        //Panorama Map
        initPanorama: function () {
		    var panorama;
		    $(document).ready(function(){
		      panorama = GMaps.createPanorama({
		        el: '#panorama',
		        lat : 6.981500,
		        lng : 81.077604
		      });
		    });
		}        

    };
}();