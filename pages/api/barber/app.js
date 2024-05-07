// Importe os modelos Schedule e Barber
const Schedule = require('../../../modules/shcedule/schedule.model.node');
const Barber = require('../../../modules/barber/barber.model.node');
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


// Rota para buscar um agendamento com informações do barbeiro
app.get('/api/schedule/:scheduleId', async (req, res) => {
  try {
    // Busca o agendamento pelo ID
    const schedule = await Schedule.findById(req.params.scheduleId).populate('barber')
    
    
    // Verifica se o agendamento existe
    if (!schedule) {
      return res.status(404).json({ message: 'Agendamento não encontrado' });
    }
    
    // Busca as informações do barbeiro associado ao agendamento
    const barber = await Barber.findById(schedule.barber);
    
    // Adiciona as informações do barbeiro ao objeto do agendamento
    schedule.barber = barber;

    // Retorna o agendamento com as informações do barbeiro
    res.status(200).send(schedule);
  } catch (error) {
    console.error('Erro ao buscar detalhes do agendamento:', error);
    res.status(500).send(error)
  }
})

app.get('/api/barber/:idBarber', async (req, res) => {
  try {
      const findABarber = await await Barber.findById(req.params.idBarber)
      
      if (!findABarber) {
        return res.status(404).json({ message: 'Barbeiro não encontrado' });
      }

      res.status(200).send(findABarber)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

app.post('/upload-image', uploadUser.single('image'), async (req, res) => {
    if (req.file) {
        return res.json({
            erro: false,
            mensagem: 'upload realizado com sucesso!',
            image: req.file
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