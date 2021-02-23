import express from 'express'


const app = express()

/**
 * GET => Busca
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração específica
 */

 // http://localhost:5050/users

app.get("/users", (req, res) => {
    return res.send("Hello World!!")
})

// 1 parametro => ROTA
// 2 Parametro => REQ, RES
app.post("/", (req, res) => {
    // RECEBEU OS DADOS PARA SALVAR
    return res.json({ message: "Os dados foram salvos com sucesso" })
})

app.listen(5050, () => console.log("server is running"))