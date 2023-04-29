import {Request, Response} from "express";
import {ProductDto} from "../dto/ProductDto";
import {ProductService} from "../service/ProductService";
import {ProductRepository} from "../repository/ProductRepository";
import {ProductModelMapper} from "../mapper/ProductModelMapper";

export class ProductController {

    private service: ProductService;

    constructor(productService: ProductService) {
        this.service = productService;
    }

    create(request: Request, response: Response) {

        this.service = new ProductService(new ProductRepository());

        const {descricao, valor, marca}: ProductDto = request.body;

        let productDtoRequest = new ProductDto(null, descricao, valor, marca);

        let productDtoResponse = ProductModelMapper.toDto(this.service.create(productDtoRequest));

        return response.json(productDtoResponse);
    }

    getAll(request: Request, response: Response) {

        this.service = new ProductService(new ProductRepository());

        return response.json(ProductModelMapper.toDtoList(this.service.getAll()));
    }

    getById(request: Request, response: Response) {

        let id = request.params["id"];

        this.service = new ProductService(new ProductRepository());

        return response.json(ProductModelMapper.toDto(this.service.getById(Number(id))));
    }

    updateById(request: Request, response: Response) {
        const {descricao, valor, marca}: ProductDto = request.body;

        let id = request.params["id"];

        this.service = new ProductService(new ProductRepository());

        let productDto = new ProductDto(null, descricao, valor, marca);

        return response.json(ProductModelMapper.toDto(this.service.updateById(Number(id), productDto)));
    }

    deleteById(request: Request, response: Response) {

        this.service = new ProductService(new ProductRepository());

        let id = request.params["id"];
        this.service.deleteById(Number(id))

        return response.status(204).json();
    }
}