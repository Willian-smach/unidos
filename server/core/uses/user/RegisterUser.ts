import { User } from "../../classes/User";
import { UseCaseAbstract } from "../UseCaseAbstract";

export class RegisterUser extends UseCaseAbstract
{
    private _field: String = "";

    public async exec(user: User)
    {
        if(!user.Name){this._field = "Nome";}
        if(!user.Email){this._field = "Email";}
        if(!user.Address){this._field = "Endereço";}
        if(!user.Password){this._field = "Senha";}

        if(this._field != "")
        {
            return this._response = 
            {
                message: `Campo ${this._field} é obrigatório`,
                status: 502
            };
        }

        const createUser = await this._repository.Create(user);

        if(!createUser)
        {
            return this._response = 
            {
                message: `Houve um problema ao registrar o usuário`,
                status: 502
            };
        }

        return this._response = 
        {
            message: `Usuário criado com sucesso`,
            status: 201
        }
    }
}