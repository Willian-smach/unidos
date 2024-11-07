import { IResponseMessage } from "../interfaces/IResponseMessage";
import IUserRepository from "../interfaces/IUserRepository";

export abstract class UseCaseAbstract
{
    public _repository: IUserRepository;
    public _response!: IResponseMessage;

    constructor(repository: IUserRepository)
    {
        this._repository = repository;
    }
}