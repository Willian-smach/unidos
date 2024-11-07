import { User } from "./User";

export class Order {
    public anonymous: Boolean;
    public status: String;
    public author: User;
    public dt_creation: Date;
    public hr_creation: Date;
    public description: String;
    public local: String;

    constructor(anonymous: Boolean, status: String, author: User, 
        dt_creation: Date, hr_creation: Date, description: String, local: String)
    {
        this.anonymous = anonymous;
        this.status = status;
        this.author = author;
        this.dt_creation = dt_creation;
        this.hr_creation = hr_creation;
        this.description = description;
        this.local = local;
    }
}