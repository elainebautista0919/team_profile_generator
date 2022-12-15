const Intern = require ('./lib/Intern');

// Test object
describe('Intern', () => {
    // Test that intern is created
    it ('An intern object is created', () => {
        const employee = new Intern ();
        expect (typeof employee).toBe('object');
    });
    // Test that school is added
    it ('A school is added to the intern object', () => {
        const school = 'University of Toronto';
        const employee = new Intern ('John', 1234, 'john@gmail.com', school);
        expect (employee.school).toBe('University of Toronto');
    });
    // Test that role is updated to intern
    it ('A role is added to the employee object', () => {
            const role = 'Intern';
            const employeeInstance = new Intern ('John', 1234, 'john@gmail.com', 'University of Toronto', role);
            expect (employeeInstance.getRole()).toBe(role);
        });
});

// Test method
describe('Intern', () => {
    // Test getSchool() method
    it ('School is retrieved using getSchool() method', () => {
        const testSchool = 'University of Toronto';
        const employee = new Intern ('John', 1234, 'john@gmail.com', testSchool);
        expect (employee.getSchool()).toBe(testSchool);
    });
});