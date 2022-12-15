const Manager = require ('./lib/Manager');

// Test object
describe('Manager', () => {
    // Test that manager is created
    it ('An manager object is created', () => {
        const employee = new Manager ();
        expect (typeof employee).toBe('object');
    });
    // Test that office number is added
    it ('A school is added to the intern object', () => {
        const officeNumber = 5678;
        const employee = new Manager ('John', 1234, 'john@gmail.com', officeNumber);
        expect (employee.officeNumber).toBe(5678);
    });
    // Test that role is updated to manager
    it ('A role is added to the employee object', () => {
            const role = 'Manager';
            const employeeInstance = new Manager ('John', 1234, 'john@gmail.com', 5678, role);
            expect (employeeInstance.getRole()).toBe(role);
        });
});

// Test method
describe('Manager', () => {
    // Test getOfficeNumber() method
    it ('Office number is retrieved using getOfficeNumber() method', () => {
        const testOfficeNumber = 5678;
        const employee = new Manager ('John', 1234, 'john@gmail.com', testOfficeNumber);
        expect (employee.getOfficeNumber()).toBe(testOfficeNumber);
    });
});