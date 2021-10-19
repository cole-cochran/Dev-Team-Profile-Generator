const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, ID, email, gitUsername) {
        super(name, ID, email);
        this.gitUsername = gitUsername;
        this.role = "Engineer";
    }
    gitGit() {
        return this.gitUsername;
    }
    theRole() {
        return this.role;
    }
}


module.exports = Engineer;