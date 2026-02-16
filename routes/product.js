import express from 'express'
import { createProduct, getProduct, getAllProduct, updateProducts} from '../controller/products.controller.js'


const router = express.Router()

router.post('/', createProduct)
router.get('/:id', getProduct)
router.get('/', getAllProduct)
router.put('/:id', updateProducts)
export default router