class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setEmail(email) {
    this.email = email;
  }

  getEmail() {
    return this.email;
  }
}

module.exports = User;