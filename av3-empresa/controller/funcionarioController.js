const express = require('express')
const router = express.Router()
const repo = require('../repository/funcionarioRepository')

router.get("/listar", async (req, res) => {
    try {
        const dados = await repo.listar()
        res.json(dados)
    } catch (erro) {
        res.status(500).json(erro)
    }
})

router.post("/cadastrar", async (req, res) => {
    try {
        const { nome, cpf, funcao } = req.body

        if (!nome || !cpf || !funcao) {
            return res.status(400).json({
                erro: "Todos os campos são obrigatórios"
            })
        }
        
        const resultado = await repo.cadastrar(nome, cpf, funcao)
        res.json(resultado)
    } catch (erro) {
        res.status(500).json(erro)
    }
})

module.exports = router