var m;
var NHSid = 3642228;
var geocoder = new google.maps.Geocoder();
var zoom = 8;
var center = new google.maps.LatLng(42.04113400940814,-71.795654296875);
var marker;
var NHSLayer, HTRLayer,DCRLayer, TXLayer;
var HTRid = 3642513;
var DCRid = 3642408;
var TXid = 3642512;
$(function() {
        $( "#tabs" ).tabs({
        	collapsible: true,
            selected: -1
		});
        $( "input:submit,input:reset" ).button();
        $('input, textarea').placeholder();
        fusion();
      //  popLists();
	});
function fusion() {
    
  m = new google.maps.Map(document.getElementById('map'), {
      center: center,
      zoom: zoom,
      mapTypeId: 'roadmap'
    });
    NHSLayer = new google.maps.FusionTablesLayer(NHSid);
    HTRLayer = new google.maps.FusionTablesLayer(HTRid);
    DCRLayer = new google.maps.FusionTablesLayer(DCRid);
    TXLayer = new google.maps.FusionTablesLayer(TXid);
  NHSLayer.setQuery("SELECT 'geometry' FROM " + NHSid);
  HTRLayer.setQuery("SELECT 'geometry' FROM " + HTRid);
  DCRLayer.setQuery("SELECT 'geometry' FROM " + DCRid);
  TXLayer.setQuery("SELECT 'geometry' FROM " + TXid);
  NHSLayer.setMap(m);
  TXLayer.setMap(m);
  HTRLayer.setMap(m);
  DCRLayer.setMap(m);
  }
  
  function geocode() {
     var address = document.getElementById("address").value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        m.setCenter(results[0].geometry.location);
        m.setZoom(14);
     marker = new google.maps.Marker({
            map: m, 
            position: results[0].geometry.location
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
}

function resetgeo() {
    
    m.setCenter(center);
    m.setZoom(zoom);
marker.setMap(null);
}
