import { TOUserAuth } from "~/server/tos/TOUserAuth";
import { UseCaseAbstract } from "../UseCaseAbstract";

export class LoginUser extends UseCaseAbstract
{
    private _field: String = "";

    public async exec(auth: TOUserAuth)
    {
        if(!auth.userName){this._field = "Usuário"};
        if(!auth.password){this._field = "Senha"};

        if(this._field != ""){
            return this._response = {
                message: `${this._field} deve ser informado`,
                status: 500
            }
        }
    }
}