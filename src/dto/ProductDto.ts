
export class ProductDto {

    id: number;
    descricao: string;
    valor: number;
    marca: string;

    constructor(id: *, description: string, value: number, brand: string) {
        this.descricao = description;
        this.valor = value;
        this.marca = brand;
        this.id = id;
    }
}