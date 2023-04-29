import {ProductModel} from "../model/ProductModel";
import {ProductDto} from "../dto/ProductDto";
import {IProductRepository} from "../repository/IProductRepository";

export class ProductService {

    private repository: IProductRepository;

    constructor(repository: IProductRepository) {
        this.repository = repository;
    }

    public create(productDto: ProductDto): ProductModel {
        let product = new ProductModel(productDto.descricao, productDto.valor, productDto.marca);
        return this.repository.create(product);
    }

    public getAll(): ProductModel[] {
        return this.repository.getAll();
    }

    public getById(id: number): ProductModel {
        return this.repository.getById(id);
    }

    public updateById(id: number, productDto: ProductDto): ProductModel {
        let product = new ProductModel(productDto.descricao, productDto.valor, productDto.marca);
        return this.repository.updateById(id, product);
    }

    public deleteById(id: number): void {
        this.repository.deleteById(id);
    }
}