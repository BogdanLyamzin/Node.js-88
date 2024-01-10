class User {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
        this.fullName = `${name} ${lastName}`;
    }
}

export default User;