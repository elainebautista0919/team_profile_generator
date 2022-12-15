const Employee = require('../lib/Employee');

// Test object
describe('Employee', () => {
    // Test that employee is created
    it ('An employee object is created', () => {
        const employee = new Employee ();
        expect (typeof employee).toBe('object');
    });
    // Test that name is added to employee
    it ('A name is added to the employee object', () => {
        const name = 'John';
        const employee = new Employee (name);
        expect (employee.name).toBe('John');
    });
    // Test that id is added to employee
    it ('An ID is added to the employee object', () => {
        const id = 1234;
        const employee = new Employee ('John', id);
        expect (employee.id).toBe(1234);
    });
    // Test that email is added to employee
    it ('An email is added to the employee object', () => {
        const email = 'john@gmail.com';
        const employee = new Employee ('John', 1234, email);
        expect (employee.email).toBe('john@gmail.com');
    });
    // Test that role is added to employee
    it ('A role is added to the employee object', () => {
            const role = 'Employee';
            const employeeInstance = new Employee ('John', 1234, 'john@gmail.com', role);
            expect (employeeInstance.getRole()).toBe(role);
        });
});

// Test method
describe('Employee', () => {
    // Test getName() method
    it ('Name is retrieved using getName() method', () => {
        const testName = 'John';
        const employee = new Employee (testName);
        expect (employee.getName()).toBe(testName);
    });
    // Test getId() method
    it ('ID is retrieved using getId() method', () => {
        const testId = 1234;
        const employee = new Employee ('George', testId);
        expect (employee.getId()).toBe(testId);
    });
    // Test getEmail() method
    it ('ID is retrieved using getEmail() method', () => {
        const testEmail = 'john@gmail.com';
        const employee = new Employee ('George', 1234, testEmail);
        expect (employee.getEmail()).toBe(testEmail);
    });
});