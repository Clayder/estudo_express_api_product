import {ProductDto} from "../dto/ProductDto";
import {ProductModel} from "../model/ProductModel";

export class ProductModelMapper {

    public static toDto(product: ProductModel): ProductDto {
        return new ProductDto(product.id, product.description, product.value, product.brand);
    }

    public static toDtoList(productList: ProductModel[]): ProductDto[] {
        let productDtoList: ProductDto[] = [];
        productList.forEach(function (product) {
            if(product !== null) {
                productDtoList.push(ProductModelMapper.toDto(product));
            }
        })
        return productDtoList;
    }
}