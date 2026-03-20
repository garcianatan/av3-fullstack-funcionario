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
    .then(res => res.json())
    .then(res => alert(`Funcionário ${res.nome} criado com sucesso!`))
})