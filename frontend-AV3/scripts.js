const url = "http://localhost:3071/funcionario/cadastrar"

const nome = document.getElementById("nome")
const cpf = document.getElementById("cpf")
const funcao = document.getElementById("funcao")

const btnCriar = document.getElementById("btnCadastrar")

btnCriar.addEventListener("click", (e) => {
    e.preventDefault()

    const funcionario = {
        nome: nome.value,
        cpf: cpf.value,
        funcao: funcao.value
    }

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(funcionario)
    })

    .then(res => {
        if (!res.ok) {
            return res.json().then(err => { throw err })
        }
        return res.json()
    })
    
    .then(res => {
        alert(`Funcionário ${funcionario.nome} criado com sucesso!`)

        nome.value = ""
        cpf.value = ""
        funcao.value = ""

        //
        carregarFuncionarios()
    })
    .catch(err => {
        alert(err.erro || "Erro ao cadastrar funcionário")
    })
})

//

const listaDiv = document.getElementById("funcionarios")

function carregarFuncionarios() {
    fetch("http://localhost:3071/funcionario/listar")
        .then(res => res.json())
        .then(dados => {

            // limpa antes de renderizar
            listaDiv.innerHTML = "<h2>Funcionários:</h2>"

            dados.forEach(func => {
                listaDiv.innerHTML += `
                    <p>
                        <strong>Nome:</strong> ${func.nome} <br>
                        <strong>CPF:</strong> ${func.cpf} <br>
                        <strong>Função:</strong> ${func.funcao}
                    </p>
                    <hr>
                `
            })
        })
        .catch(() => {
            listaDiv.innerHTML += "<p>Erro ao carregar funcionários</p>"
        })
}

carregarFuncionarios()