function initMap() {
  // Cria um objeto LatLng com as coordenadas do local que você deseja exibir
  var location = { lat: -23.5505, lng: -46.6333 };

  // Cria um novo mapa e o associa ao elemento <div> com o ID "map"
  var map = new google.maps.Map(document.getElementById("map"), {
    center: location,
    zoom: 12
  });

  // Cria um marcador no mapa
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "Meu local"
  });
}