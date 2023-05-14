
let listaDigimon = [];

function buscar() {

    document.getElementById("id_corpo_tabela").innerHTML = ""

    fetch(`https://digimon-api.vercel.app/api/digimon`)
        .then(r => r.json())
        .then(json => {

            console.log(json)

            listaDigimon = json // Lista de Objetos

            // Seleciona a tabela
            let tabelaCorpo = document.getElementById("id_corpo_tabela")

            let linha

            let colunaName
            let colunaLevel
            let colunaImg

            // Outra forma de fazer
            // for (i = 0; i <= listaDigimon.length - 1; i++) {
            //     // console.log(i)            
            //     console.log(listaDigimon[i].img)
            // }                   

            // Apenas um teste
            // let item = document.innerHTML = 
            // `<tr>
            //     <td>Kuromon</td>
            //     <td>Rookie</td>
            //     <td>img</td>
            // </tr>`

            // document.getElementById("id_table").innerHTML = document.getElementById("id_table").outerHTML + item


            // for(post of posts)
            // for(produto of produtos)
            // for(x of clientes)

            for (itemListaDigimon of listaDigimon) {
                console.log(itemListaDigimon)
                // Cria a linha <tr>
                linha = document.createElement("tr")

                // Cria as colunas <td>
                colunaName = document.createElement("td")
                colunaLevel = document.createElement("td")
                colunaImg = document.createElement("td")

                // Adiciona valor nas colunas
                colunaName.innerHTML = itemListaDigimon.name
                colunaLevel.innerHTML = itemListaDigimon.level
                colunaImg.innerHTML = `<img src="${itemListaDigimon.img}" alt="${itemListaDigimon.name}" title="${itemListaDigimon.name}" /> `

                // Adiciona as colunas na linha
                linha.appendChild(colunaName)
                linha.appendChild(colunaLevel)
                linha.appendChild(colunaImg)

                // Adiciona a linha na tabela
                tabelaCorpo.appendChild(linha)

            }

        })
}



//  let cep = document.getElementById('id_cep').value

// fetch("https:viacep.com.br/ws/" + cep + "/json/")

function btn_pesquisar_digimon() {

    document.getElementById("id_corpo_tabela").innerHTML = ""

    let nomeDoDigimon = document.getElementById('id_pesquisar').value;


    fetch(`https://digimon-api.vercel.app/api/digimon/name/${nomeDoDigimon}`)
        .then(r => r.json())
        .then(json => {
        console.log(json)
                // Lista de Objetos

                // Seleciona a tabela
                let tabelaCorpo = document.getElementById("id_corpo_tabela")

                let linha

                let colunaName
                let colunaLevel
                let colunaImg




                console.log(json)
                // Cria a linha <tr>
                linha = document.createElement("tr")

                // Cria as colunas <td>
                colunaName = document.createElement("td")
                colunaLevel = document.createElement("td")
                colunaImg = document.createElement("td")




                // Adiciona valor nas colunas
                colunaName.innerHTML = json[0].name
                colunaLevel.innerHTML = json[0].level
                colunaImg.innerHTML = `<img src="${json[0].img}" alt="${json[0].name}" title="${json[0].name}" /> `

                // Adiciona as colunas na linha
                linha.appendChild(colunaName)
                linha.appendChild(colunaLevel)
                linha.appendChild(colunaImg)

                // Adiciona a linha na tabela
                tabelaCorpo.appendChild(linha)
            })        
}    


