let inputImovel = document.getElementById("imovel")
let inputPrestacao = document.getElementById("prestacoes")
let inputJuros = document.getElementById("juros")
let resultado = document.getElementById("resultado")

function calcular(){
    let imovel = inputImovel.value
    let prestacoes = inputPrestacao.value
    let juros = inputJuros.value /100

    let ptm = (1 + juros)**prestacoes * juros
    ptm /= (1 + juros) ** prestacoes - 1
    ptm *= imovel

    resultado.innerHTML = `<h1>O VALOR DA PRESTACAO É:</h1>`
    
    resultado.innerHTML += `<h1>${ptm.toLocaleString('pt-br', {style: `currency`, currency: `BRL`})}</h1>`
}