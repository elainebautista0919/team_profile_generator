// Import Employee parent class
const Employee = require('./Employee');

// Class for engineer
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email, gitHub);
        this.gitHub = gitHub;
        this.role = 'Engineer';
    }

    getGitHub() {
        return this.gitHub;
    }
}
module.exports = Engineer;