import express from 'express'
import { createProduct, getProduct, getAllProduct, updateProducts, deleteProduct} from '../controller/products.controller.js'


const router = express.Router()

router.post('/', createProduct)
router.get('/:id', getProduct)
router.get('/', getAllProduct)
router.put('/:id', updateProducts)
router.delete('/:id', deleteProduct)
export default router