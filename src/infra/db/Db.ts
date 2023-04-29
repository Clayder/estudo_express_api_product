import {ProductModel} from "../../model/ProductModel";

export class Db {
    private static _productTable: ProductModel[] = [];
    private static _qty: number = 1;

    static get productTable(): ProductModel[] {
        return this._productTable;
    }

    static loadFakeData() {
        this._productTable = [
            new ProductModel("Arroz parboilizado 5Kg", 25, "Tio João"),
            new ProductModel("Maionese 250gr", 7.20, "Helmans"),
            new ProductModel("Iogurte Natural 200ml", 2.50, "Itambé"),
            new ProductModel("Batata Maior Palha 300gr", 15.20, "Chipps"),
            new ProductModel("Nescau 400gr", 8.00, "Nestlé")
        ];
    }

    static get qty(): number {
        return this._qty++;
    }
}