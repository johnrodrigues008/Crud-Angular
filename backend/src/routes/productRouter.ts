import { Router } from "express";
import { getProducts, getProduct, deleteProduct, postProduct, updateProduct } from "../controllers/productController";

const router = Router();

// Listar todos os produtos
router.get('/', getProducts);

// Listar um produto
router.get('/:id', getProduct);

// Deletar um produto
router.delete('/:id', deleteProduct);

// Criar um produto
router.post("/", postProduct);

// Editar um produto
router.put("/:id", updateProduct);

export default router;

