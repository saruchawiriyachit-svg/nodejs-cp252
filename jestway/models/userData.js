const initialUsersData = require('./initdata');
const User = require('./user');

class UserData {
    constructor() {
        this.n = 0;
        this.users = [];

        initialUsersData.forEach(user => {
            const newUser = new User(user.name, user.email); 
            this.addUser(newUser);
        });
    }

    addUser(user) {
        this.users.push(user);
        this.n = this.n + 1;
    }

    removeOneUser() {
        if (this.users.length > 0) {
            this.n = this.n - 1;
            return this.users.pop();
        } else {
            return null;
        }
    }

    removeTwoUser() {
    let removeCount = Math.min(2, this.users.length);

    for (let i = 0; i < removeCount; i++) {
        this.users.pop();
        this.n--;
    }
}

    getUserCount() {
        return this.n;
    }

    clearUsers() {
        this.users = [];
        this.n = 0;
    }
}

module.exports = UserData;