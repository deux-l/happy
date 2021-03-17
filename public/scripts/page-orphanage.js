const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//Pegar valores de lat e lng do html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

// Criar var que recebe mapa
const map = L.map('mapid', options).setView([lat, lng], 16);

// Criar o mapa
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }
).addTo(map);

// Criar o icone de localização
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// Mostrar o ícone de acordo com a localização
L.marker([lat,lng], {icon}).addTo(map)


// galeria das imagens

function selectImage(event) {
    const button = event.currentTarget

    // remover todas classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove('active')
    }

    //Selecionar imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // Atualizar container de imagem
    imageContainer.src = image.src

    // Adicionar classe .active para este botão 
    button.classList.add('active')
}