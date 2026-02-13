import express from 'express'
import { createProduct, getProduct, getAllProduct } from '../controller/products.controller.js'


const router = express.Router()

router.post('/', createProduct)
router.get('/:id', getProduct)
router.get('/', getAllProduct)

export default router