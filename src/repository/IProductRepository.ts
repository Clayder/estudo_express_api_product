import {ProductDto} from "../dto/ProductDto";
import {ProductModel} from "../model/ProductModel";

export interface IProductRepository {
    create(productDto: ProductDto): ProductModel;
    getAll(): ProductModel[];
    getById(id: number): ProductModel;
    updateById(id: number, product: ProductModel): ProductModel;
    deleteById(id:number): void
}