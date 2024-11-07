import { uuid } from "uuidv4";

export class User{
    private id: String;
    private name: String;
    private email: String;
    private password: String;
    private address: String;

    constructor(name: String, email: String, password: String, address: String, id?: String){
        this.name = name;
        this.email = email;
        this.password = password;
        this.address = address;
        if(id){
            this.id = id;
        }else{
            this.id = uuid();
        }
    }

    get Name(){
        return this.name;
    }

    get Email(){
        return this.email;
    }

    get Address(){
        return this.address;
    }

    get Password(){
        return this.password;
    }
}