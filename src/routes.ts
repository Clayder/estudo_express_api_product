import {Router} from "express";
import {ProductController} from "./controller/ProductController";
import {ProductService} from "./service/ProductService";
import {ProductRepository} from "./repository/ProductRepository";

const router = Router();

// Product
router.post('/produtos', new ProductController(new ProductService(new ProductRepository())).create)
router.get('/produtos', new ProductController(new ProductService(new ProductRepository())).getAll)
router.get('/produtos/:id', new ProductController(new ProductService(new ProductRepository())).getById)
router.put('/produtos/:id', new ProductController(new ProductService(new ProductRepository())).updateById)
router.delete('/produtos/:id', new ProductController(new ProductService(new ProductRepository())).deleteById)

export {router};