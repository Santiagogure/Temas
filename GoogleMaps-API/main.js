function iniciarMap(){
    var coord = {lat:-34.6041101 ,lng: -58.386287}; //Local: Revisteria de Corrientes
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 12,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}