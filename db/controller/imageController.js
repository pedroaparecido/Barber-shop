const Barber = require('../../modules/barber/barber.model.node')

exports.create = async (req, res) => {
    try {
        const {name} = req.body
        console.log(name)
        const file = req.file

        const image = new Barber({
            image: file.path
        })

        await image.save()

        res.json({ image, msg: 'Imagem salva' })
    } catch (err) {
        res.status(500).json("erro ao salvar")
    }
}

exports.findAll = async (req, res) => {
    try {
        const image = await Barber.find()

        res.json(image)
    } catch (err) {
        res.status(500).json({ message: "Erro ao buscar" })
    }
}