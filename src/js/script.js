let valorTotal = 0.00
let tagUl = document.querySelector(".seleção")
let tagSpan = document.querySelector("#valor")
    tagSpan.innerText = `R$ ${valorTotal}`

 
 function calculaTotal(lista){
     
     let valorTotal = 0.00
     let listaValores = lista.map(x => x.preco)
     
     for(let i=0;i<listaValores.length;i++){
         valorTotal += listaValores[i]
     }
     valorTotal = valorTotal.toFixed(2)
     return `R$ ${valorTotal}`
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
        if(item.secao == 'Hortifruti'){
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
    
    let componentes = item.componentes
    let tagLi   = document.createElement("li")
    tagLi.setAttribute("class", "removedor")
    let tagImg     = document.createElement("img")
    let tagH3      = document.createElement("h3")
    let tagSpan    = document.createElement("span")
    let tagP       = document.createElement("p")
    let tagBtn     = document.createElement("button")
    tagBtn.addEventListener("click", () => {
        addCarrinho(item)
        let noneClass = document.querySelectorAll(".none")
        noneClass.forEach(item => item.classList.remove('none'))
        const valorTotal = document.querySelector(".tudo")
        const quantidade = document.querySelector(".quantia")
        const sacola = document.querySelector(".sacola")
        const sacolaText = document.querySelector(".sacola-texto")
        sacola.classList.add('none')
        sacolaText.classList.add('none')
        quantidade.innerText = arrCarrinho.length
        valorTotal.innerText = calculaTotal(arrCarrinho)
        
    })
    const divPai   = document.createElement("div")
    const divSecao = document.createElement("div")
    const divBtn   = document.createElement("div")
    const tagOl    = document.createElement("ol")
    const li1      = document.createElement("li")
    const li2      = document.createElement("li")
    const li3      = document.createElement("li")
    

    tagImg.src        = item.img
    tagImg.alt        = item.nome
    tagH3.innerText   = item.nome
    tagSpan.innerText = item.secao
    tagP.innerText    = `R$ ${item.preco.toFixed(2)}`
    tagBtn.innerText  = "Comprar"
    tagOl.append(li1,li2,li3)
    
    for(let i=0;i<componentes.length;i++){
        let componente = componentes[i]
        if(i == 0){
            li1.innerText = componente
        }else if(i == 1){
            li2.innerText = componente
        }else if(i == 3){
            const li4     = document.createElement("li")
            li4.innerText = componente
            tagOl.appendChild(li4)
        }else if(i == 2)
            li3.innerText = componente
            
    }

    tagLi.appendChild(tagImg)
    tagLi.appendChild(tagH3)
    tagLi.appendChild(tagSpan)
    tagLi.appendChild(tagOl)
    divPai.appendChild(divSecao)
    divPai.appendChild(divBtn)
    tagLi.appendChild(divPai)
    divSecao.appendChild(tagP)
    divBtn.appendChild(tagBtn)

    return tagLi
}

let arrCarrinho = []

function addCarrinho(item){
    arrCarrinho.push(item)
    const tagUl   = document.querySelector(".lista-carrinho")
    const divImg  = document.createElement("div")
    const divElem = document.createElement("div")
    const divBtn  = document.createElement("div")
    divBtn.setAttribute("class", "lixeira")
    const tagLi   = document.createElement("li")
    const tagImg  = document.createElement("img")
    const tagH3   = document.createElement("h3")
    const tagSpan = document.createElement("span")
    const tagP    = document.createElement("p")
    const tagBtn  = document.createElement("button")
    tagBtn.addEventListener("click",() => {
        tagLi.remove()
        arrCarrinho.splice(-1, 1)
        if(arrCarrinho.length == 0){
            let noneClass = document.querySelectorAll(".batman")
            noneClass.forEach(item => item.classList.add('none'))
        }
        const valorTotal = document.querySelector(".tudo")
        const quantidade = document.querySelector(".quantia")
        quantidade.innerText = arrCarrinho.length
        valorTotal.innerText = calculaTotal(addCarrinho)
    })
    const imgBtn     = document.createElement("img")
    const quantidade = document.createElement("p")
    const valorQuant = document.createElement("span")
    const total      = document.createElement("span")
    const valorTotal = document.createElement("p")
    const divQuantia = document.querySelector(".quantidade")
    const divTotal   = document.querySelector(".Total")

    tagImg.src           = item.img
    tagImg.alt           = item.nome
    tagH3.innerText      = item.nome
    tagSpan.innerText    = item.secao
    tagP.innerText       = `R$ ${item.preco.toFixed(2)}`
    imgBtn.src           = `./src/img/trash.png`
    imgBtn.alt           = "icone de lixeira"
   
    valorQuant.innerText = arrCarrinho.length
    
    valorTotal.innerText = calculaTotal(arrCarrinho)


    tagUl.appendChild(tagLi)
    tagLi.appendChild(divImg)
    tagLi.appendChild(divElem)
    tagLi.appendChild(divBtn)
    divImg.appendChild(tagImg)
    divElem.append(tagH3,tagSpan, tagP)
    divBtn.appendChild(tagBtn)
    tagBtn.appendChild(imgBtn)

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

    if(pesquisa == "Hortifruti" || pesquisa == "hortifuti" || pesquisa == "hortifrute" || pesquisa == "Frutas" || pesquisa == "frutas"){
        return hortifruti()
    }else if(pesquisa == "Panificadora" || pesquisa == "panificadora" || pesquisa == "Pães" || pesquisa == "pães" || pesquisa == "paes"){
        return panificadora()
    }else if(pesquisa == "Laticinios" || pesquisa == "laticinios" || pesquisa == "laticínios" || pesquisa == "Laticínios" || pesquisa == "Leite" || pesquisa == "leite"){
        return laticinios()
    }else{
        listarProdutosBusca(resultadoPesquisa)
    }

    inputBuscar.value = ""
})

function busca(pesquisa){
    let resultadoBusca = produtos.filter(x => x.nome.toLowerCase().includes(pesquisa.toLowerCase()))
    calculaTotal(resultadoBusca)
    return resultadoBusca
}
