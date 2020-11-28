<!-- Pre-fills all inputs on Edit Deal Modal -->
<script>
  $( document ).ready(function() {
    $("#Fundraising-Status").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');
    $("#Risk-Profile").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');
    $("#Asset-Type").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');
    $("#Asset-Class").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');
    $("#City").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');
    $("#State").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');
    $("#Deal-Name").val('{{wf {&quot;path&quot;:&quot;name&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}');
    $("#Purchase-Price").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');
    $("#Total-Equity-Available").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');
    $("#Min-Investment").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');
    $("#Max-Investment").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');
    $("#Preferred-Return").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');
    $("#LP-GP-Split").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');
    $("#Distributions").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');
    $("#Target-Hold").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');
    $("#IRR").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');
    $("#Cash-on-Cash").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');
    $("#Equity-Multiple").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');
    $("#Investment-Summary").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');
    $("#Market-Summary").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');
    $("#Address").val('{{wf {&quot;path&quot;:&quot;name&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}');
    $("#Units").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');
    $("#datepicker").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');
    $("#Featured-Photo").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');
    $("#Photo-2").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');
    $("#Photo-3").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');
    $("#Photo-4").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');
    $("#Photo-5").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');
    $("#Video-URL").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');
    $("#Photo-5").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');    
        $("#Photo-5").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');
    $("#Video-URL").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');
    $("#Photo-5").val('{{wf {&quot;path&quot;:&quot;fundraising-status&quot;,&quot;type&quot;:&quot;Option&quot;\} }}');    
  }); 
</script>



<!-- If MS ID is not equal to current user, do not show... -->
<script>
  MemberStack.onReady.then(function(member) {   
    if (member['id'] !== '{{wf {&quot;path&quot;:&quot;deal-owner-2:memberstack-member-id&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}') {
  $('#edit-deal, #edit-button').css({'display': 'none'});
    };
  });
</script>



<!-- Strips video ID from YouTube video URL -->
<script>
	url = "{{wf {&quot;path&quot;:&quot;video-url&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}"
  VID_REGEX = /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
  ytid = url.match(VID_REGEX)[1];
  $("#video-player iframe").attr("src","https://www.youtube.com/embed/" + ytid);
</script>



<!-- Disables scrolling on body when in editing modal -->
<script>
Webflow.push(function() {
  $('#edit-button').click(function(e) {
    e.preventDefault();
	$('body').css('overflow', 'hidden');
  });

  $('#modal-closer, #cancel-button').click(function(e) {
    e.preventDefault();
	$('body').css('overflow', 'auto');
  });
});
</script>



<!-- Google Maps Local Context Beta -->
<script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
<script
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD7LGYtDkEUJKj94MvRwI5M7zt9fSGdACA&map_ids=26a6a13420ca6557&callback=initMap&libraries=localContext&v=beta"
  defer
></script>
<style> 
	*:focus { outline:0; } 
	.map { overflow-anchor:none; }
  .poi-info-window .title {
    margin-top:0px;
    line-height: normal;
    letter-spacing: normal;
    margin-bottom: 5px;
    text-transform: capitalize; }
  .map div.poi-info-window .view-link { display:none; }
</style>
<script>
let map;

const styles = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    elementType: "labels",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "administrative.neighborhood",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#dadada",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#c9c9c9",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: -34.397, lng: 150.644},
  zoom: 16,
});
	
  var icon = {
      url: "https://uploads-ssl.webflow.com/5f0907e6746ab0a3702d162f/5fb0dbe335398851bdfb9db0_Untitled-1.png", // url
      scaledSize: new google.maps.Size(34, 50), // scaled size
  }; 
  
  let geocoder = new google.maps.Geocoder();
  
  geocoder.geocode({
    address: "{{wf {&quot;path&quot;:&quot;property-address&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}"
  }, (results, status) => {
    if (status === "OK") {
    
      const center = results[0].geometry.location;
      
      
      
      // Set new center and zoom
      map.setOptions({
        center: center,
   			zoom: 16,
        mapId: '26a6a13420ca6557',
    		mapTypeId: 'terrain',
    		gestureHandling: "cooperative",
        scrollwheel: false,
        styles,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: true,
        streetViewControlOptions: {
      			position: google.maps.ControlPosition.RIGHT_CENTER,
    			},
        zoomControl: true,
        zoomControlOptions: {
      			position: google.maps.ControlPosition.RIGHT_CENTER,
    			},
        rotateControl: true,
        fullscreenControl: false,
      });
      
      new google.maps.Marker({
        icon: icon,
        position: center,
        map: map,
      });
			
     
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}
</script>
