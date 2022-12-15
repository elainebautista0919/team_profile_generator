// Import Employee parent class
const Employee = require('./Employee');

// Class for intern
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, school);
        this.gitHub = school;
        this.role = 'Intern';
    }

    getSchool() {
        return this.school;
    }
}
module.exports = Intern;