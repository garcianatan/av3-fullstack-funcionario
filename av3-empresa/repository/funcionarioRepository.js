const conexao = require('../server/db')

exports.listar = () => {
    return new Promise((resolve, reject) => {
        conexao.query("SELECT * FROM funcionario", (erro, result) => {
            if (erro) reject(erro)
            resolve(result)
        })
    })
}

exports.cadastrar = (nome, cpf, funcao) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO funcionario (nome, cpf, funcao) VALUES (?, ?, ?)"
        conexao.query(sql, [nome, cpf, funcao], (erro, result) => {
            if (erro) reject(erro)
            resolve(result)
        })
    })
}