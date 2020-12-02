const express = require('express')
const router = express.Router()
const produtosController = require('../controllers/controllerProdutos')

router.get('/', produtosController.index)

router.get('/adicionar', produtosController.add)
router.get('/criar', produtosController.create)

router.get('/modificar/:id', produtosController.modify)
router.get('/alterar/:id', produtosController.edit)

router.get('/excluir/:id', produtosController.exclude)
router.get('/deletar/:id', produtosController.delete)

router.get('/:id', produtosController.show)

module.exports = router