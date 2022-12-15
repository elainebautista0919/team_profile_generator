const Engineer = require ('../lib/Engineer');

// Test object
describe('Engineer', () => {
    // Test that engineer is created
    it ('An engineer object is created', () => {
        const employee = new Engineer ();
        expect (typeof employee).toBe('object');
    });
    // Test that github is added
    it ('A Github username is added to the engineer object', () => {
        const gitHub = 'elaine0919';
        const employee = new Engineer ('John', 1234, 'john@gmail.com', gitHub);
        expect (employee.gitHub).toBe('elaine0919');
    });
    // Test that role is updated to engineer
    it ('A role is added to the employee object', () => {
            const role = 'Engineer';
            const employeeInstance = new Engineer ('John', 1234, 'john@gmail.com', 'elaine0919', role);
            expect (employeeInstance.getRole()).toBe(role);
        });
});

// Test method
describe('Engineer', () => {
    // Test getGitHub() method
    it ('GitHub username is retrieved using getGitHub() method', () => {
        const testGitHub = 'elaine0919';
        const employee = new Engineer ('John', 1234, 'john@gmail.com', testGitHub);
        expect (employee.getGitHub()).toBe(testGitHub);
    });
});