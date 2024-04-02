const express = require('express');
const cors = require('cors')
const path = require('path')

require("../../../db/config/mongoose")
const imageController = require('../../../db/controller/imageController')

const app = express();
const uploadUser = require('../../../lib/middlewares/uploadImage');

app.use('/files', express.static(path.resolve(__dirname, "public", "upload")))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE OPTIONS")
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization")
    app.use(cors())
    next()
})

app.get("/list-image", imageController.findAll, async (req, res) => {
    await image
})

app.post('/upload-image', uploadUser.single('image'), imageController.create, async (req, res) => {
    if (req.file) {
        return res.json({
            erro: false,
            mensagem: 'upload realizado com sucesso!'
        });
    }

    return res.status(400).json({
        erro: true,
        mensagem: 'Erro: upload não relizado com sucesso!'
    });
})

app.listen(8080, () => {
    console.log('servidor iniciado na porta 8080 http://localhost:8080')
})