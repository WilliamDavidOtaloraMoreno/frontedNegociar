class User{

    public userId: number;
    public username: string;
    public passwordHash: string;
    public email: string;

    constructor(userId: number, username: string, passwordHash: string, email: string){
        this.userId = userId;
        this.username = username;
        this.passwordHash =  passwordHash;
        this.email = email;
    }
}
export default User;