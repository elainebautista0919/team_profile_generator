// Import Employee parent class
const Employee = require('./Employee');

// Class for manager
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, officeNumber););
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}
module.exports = Manager;