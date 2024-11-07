import { User } from "../classes/User";

export default interface IUserRepository{
    Create(user: User): boolean;
    Update(user: User): boolean;
    GetUser(id: String): User;
    GetByEmail(email: String): boolean;
}