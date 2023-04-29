export class BaseException implements Error {

    private _message: string;
    private readonly _name: string;
    private _statusCode: number;

    constructor(message: string, statusCode: number) {
        this._message = message;
        this._name = "NOT_FOUND";
        this._statusCode = statusCode
    }

    get message(): string {
        return this._message;
    }

    get name(): string {
        return this._name;
    }

    get statusCode(): number {
        return this._statusCode;
    }
}