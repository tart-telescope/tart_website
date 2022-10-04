var carousel = setInterval(change, 10000);

var images = ["slideshow_1.jpg", "slideshow_2.jpg", "slideshow_3.jpg"];
var index = 0;
var oneortwo = 0;

$(document).ready(function() {
    $("#image1").attr("src", images[index]);
    $("#image2").attr("src", images[index+1]);
    $("#image2").fadeOut(1);
    index = index + 1;
});

function change() {
    index = index + 1;
    if (index == images.length) {
        index = 0;
    }
    if (oneortwo == 0) {
        $("#image1").fadeTo(1000, 0, function() {$("#image1").attr("src", images[index]);});
        $("#image2").fadeTo(1000, 1);
        oneortwo = 1;
    } else {
        $("#image2").fadeTo(1000, 0, function() {$("#image2").attr("src", images[index]);});
        $("#image1").fadeTo(1000, 1);
        oneortwo = 0;
    }

}

var styleArray = [ { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [ { "color": "#000000" } ] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [ { "color": "#969696" } ] }, { "featureType": "administrative", "elementType": "labels.text", "stylers": [ { "color": "#5e5e5e" } ] }, { "featureType": "administrative", "elementType": "labels.text.stroke", "stylers": [ { "color": "#bbbbbb" } ] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [ { "color": "#cfcfcf" } ] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [ { "color": "#ffffff" } ] }, { "featureType": "poi", "elementType": "labels.text.stroke", "stylers": [ { "color": "#000000" } ] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [ { "color": "#5e655e" } ] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [ { "color": "#ffffff" } ] }, { "featureType": "poi.park", "elementType": "labels.text.stroke", "stylers": [ { "color": "#000000" } ] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [ { "color": "#000000" } ] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [ { "color": "#ffffff" } ] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [ { "color": "#000000" } ] } ];

// to add styles, add styles as the key to the map json options and the value being styleArray

function initMap() { 
    var hq = {lat: -45.863898, lng: 170.513485};
    var signal = {lat: -45.85177, lng: 170.5456};
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 13,center: hq});
    var marker = new google.maps.Marker({ position: hq,  map: map, label:'HQ' });
    var marker = new google.maps.Marker({ position: signal,  map: map, label:'Signal' });
}
