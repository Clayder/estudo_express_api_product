import {Db} from "../infra/db/Db";

export class ProductModel {

    private readonly _id: number;
    private _description: string;
    private _value: number;
    private _brand: string;

    constructor(description: string, value: number, brand: string) {
        this._id = Db.qty;
        this._description = description;
        this._value = value;
        this._brand = brand;
    }

    get id(): number {
        return this._id;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get value(): number {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
    }

    get brand(): string {
        return this._brand;
    }

    set brand(value: string) {
        this._brand = value;
    }
}