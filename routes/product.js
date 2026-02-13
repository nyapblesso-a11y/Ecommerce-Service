import express from 'express'
import { createProduct, getProduct } from '../controller/products.controller.js'


const router = express.Router()

router.post('/', createProduct)
router.get('/:id', getProduct)

export default router