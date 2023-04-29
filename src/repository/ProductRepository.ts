import {ProductModel} from "../model/ProductModel";
import {IProductRepository} from "./IProductRepository";
import {Db} from "../infra/db/Db";
import {NotFoundException} from "../exception/NotFoundException";

const productNotFound = "Product not found.";

export class ProductRepository implements IProductRepository {

    public create(product: ProductModel): ProductModel {
        let db = Db.productTable;
        db.push(product);
        return product;
    }

    public getAll(): ProductModel[] {
        return Db.productTable;
    }

    public getById(id: number): ProductModel {

        let product = Db.productTable.find(this.getPredicateFindById(id));
        if(product === undefined) {
            throw new NotFoundException(productNotFound);
        }
        return product;
    }

    public updateById(id:number, product: ProductModel): ProductModel {
        let index = this.getIndex(id);

        let productoDbList = Db.productTable;

        productoDbList[index].brand = product.brand;
        productoDbList[index].value = product.value;
        productoDbList[index].description = product.description;

        return productoDbList[index];
    }

    public deleteById(id:number): void {
        let index = this.getIndex(id);
        delete Db.productTable[index];
    }

    private getIndex(id: number) {
        let index = Db.productTable.findIndex(this.getPredicateFindById(id));

        if(index === -1) {
            throw new NotFoundException(productNotFound);
        }

        return index;
    }

    private getPredicateFindById(id: number) {
        return item => {
            return item !== undefined && item.id === id;
        };
    }
}