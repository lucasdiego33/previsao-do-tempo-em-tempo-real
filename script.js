const api = "53e9bc857ccab7bdf52b643d67a25b42"

function colocardadosNatela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + " °C"
    document.querySelector(".text-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + " %"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png `
}




async function buscarCidade(cidade) {
    const dados = await fetch(`  https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${api}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocardadosNatela(dados)
}



function cliqueiNoBotao() {
    const cidade = document.querySelector(".inp").value


    buscarCidade(cidade)
}