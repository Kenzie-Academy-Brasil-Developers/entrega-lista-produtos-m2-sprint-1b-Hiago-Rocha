let valorTotal = 0.00
let tagUl = document.querySelector(".seleção")
let tagSpan = document.querySelector("#valor")
    tagSpan.innerText = `R$ ${valorTotal}`

 
 function calculaTotal(lista){
     
     valorTotal = 0.00
     let listaValores = lista.map(x => x.preco)
     console.log(listaValores)
     
     for(let i=0;i<listaValores.length;i++){
         valorTotal += listaValores[i]
     }
     console.log(valorTotal)
     valorTotal = valorTotal.toFixed(2)
     tagSpan.innerText = `R$ ${valorTotal}`
 }

calculaTotal(produtos)

function listarProdutos(produtos){
    for(let i=0;i<produtos.length;i++){
        let item = produtos[i]
        let cardCriado = criarCard(item)

        tagUl.appendChild(cardCriado)
    }
    calculaTotal(produtos)
}

listarProdutos(produtos)

function listarhortifruti(produtos){
    let newArr = []
    for(let i=0;i<produtos.length;i++){
        let item = produtos[i]
        if(item.categoria == 'fruta'){
            newArr.push(item)
            let cardCriado = criarCard(item)
            tagUl.appendChild(cardCriado)
        }
    }
    calculaTotal(newArr)
}

function listarPanificadora(produtos){
    let newArr = []
    for(let i=0;i<produtos.length;i++){
        let item = produtos[i]
        if(item.categoria == 'Pães'){
            newArr.push(item)
            let cardCriado = criarCard(item)
            tagUl.appendChild(cardCriado)
        }
    }
    calculaTotal(newArr)
}

function listarLaticinios(produtos){
    let newArr = []
    for(let i=0;i<produtos.length;i++){
        let item = produtos[i]
        if(item.categoria == 'Leite'){
            newArr.push(item)
            let cardCriado = criarCard(item)
            tagUl.appendChild(cardCriado)
        }
    }
    calculaTotal(newArr)
}

function listarProdutosBusca(resultadoPesquisa){
    let removedor = document.querySelectorAll(".removedor")
    removedor.forEach(function(item){
        item.remove()
    })
    resultadoPesquisa.forEach(function(item){
        let cardCriado = criarCard(item)
        tagUl.appendChild(cardCriado)
    })
}


function criarCard(item){
    
    let tagLi   = document.createElement("li")
    tagLi.setAttribute("class", "removedor")
    let tagImg  = document.createElement("img")
    let tagH3   = document.createElement("h3")
    let tagSpan = document.createElement("span")
    let tagP    = document.createElement("p")

    tagImg.src = item.img
    tagImg.alt = item.nome
    tagH3.innerText = item.nome
    tagSpan.innerText = item.secao
    tagP.innerText = `R$ ${item.preco.toFixed(2)}`

    tagLi.appendChild(tagImg)
    tagLi.appendChild(tagH3)
    tagLi.appendChild(tagSpan)
    tagLi.appendChild(tagP)

    return tagLi
}

let botãoGeral = document.querySelector(".geral")

botãoGeral.addEventListener("click", geral)

function geral(){
    let removedor = document.querySelectorAll(".removedor")
    removedor.forEach(item => item.remove())
    listarProdutos(produtos)
}

let botãoHortifruti = document.querySelector(".hortifruti")

botãoHortifruti.addEventListener("click", hortifruti)

function hortifruti(){
    let removedor = document.querySelectorAll(".removedor")
    removedor.forEach(function(item){
        item.remove()
    })
    listarhortifruti(produtos)
}

let botãoPanificadora = document.querySelector(".panificadora")

botãoPanificadora.addEventListener("click", panificadora)

function panificadora(){
    let removedor = document.querySelectorAll(".removedor")
    removedor.forEach(function(item){
        item.remove()
    })
    listarPanificadora(produtos)
}

let botaoLaticinios = document.querySelector(".laticinios")

botaoLaticinios.addEventListener("click", laticinios)

function laticinios(){
    let removedor = document.querySelectorAll(".removedor")
    removedor.forEach(function(item){
        item.remove()
    })
    listarLaticinios(produtos)
}

let inputBuscar = document.querySelector(".campoBuscaPorNome")
let botaoBuscar = document.querySelector(".estiloGeralBotoes--botaoBuscaPorNome")

botaoBuscar.addEventListener("click", function(){
    
    let pesquisa = inputBuscar.value
    let resultadoPesquisa = busca(pesquisa)

    listarProdutosBusca(resultadoPesquisa)

    inputBuscar.value = ""
})

function busca(pesquisa){
    let resultadoBusca = produtos.filter(x => x.nome.toLowerCase().includes(pesquisa.toLowerCase()))
    calculaTotal(resultadoBusca)
    return resultadoBusca
}
