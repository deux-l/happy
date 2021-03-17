// Criar var que recebe mapa
const map = L.map('mapid').setView([-22.7159645,-43.5585992], 16);

// Criar o mapa
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }
).addTo(map);


// Criar o ícone de localização
const icon = L.icon({
    iconUrl: "./images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker; //Declarar var que add o marcador

// Função que cria e adiciona marcador no mapa
map.on('click', (event) => {
    const lat = event.latlng.lat; // Pega a latitude
    const lng = event.latlng.lng; //Pega a longitude

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

// Remover ícone
    marker && map.removeLayer(marker);

// Adicionar marcador no mapa
    marker = L.marker([lat, lng], {icon}).addTo(map);
})


// adicionar fotos
function addPhotoField() {
    // Pegar o container #images
    const container = document.querySelector('#images')

    // Pegar o container que duplica .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //Clonar
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)

    // verificar se campo está vazio, se sim, não adicionará campo vazio
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return 
    }

    // Limpar o campo antes de adicionar
    input.value = ""

    //Adicionar clone ao container #images
    container.appendChild(newFieldContainer)
}


// Tratar o campo de upload
function deleteField(event) {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        span.parentNode.children[0].value = "" //Limpa o campo
        return //Deleta a partir do segundo campo
    }

//Deletar o campo
    span.parentNode.remove()
}


// selecionar 'sim' e 'não' nos botoes
function toggleSelect(event) {
// Retirar classe .active
    document.querySelectorAll('.button-select button')
    .forEach( button => button.classList.remove('active'))

// Colocar classe .active
    const button = event.currentTarget
    button.classList.add('active')

// Atualizar input hidden com valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value
}

//validando se evento de click para marcar localização foi efetuado
function validate(event) {
    const valida = document.querySelector('[name="lat"]')
    if(valida.value == "") {
        event.preventDefault() 
        alert('Favor marcar no mapa localização do estabelecimento.')
    }
}