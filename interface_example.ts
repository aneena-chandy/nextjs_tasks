interface Employee{
    id: number;
    name: string;
    department: string;
    salary: number;
    email?: string;

}

interface Manager extends Employee {
    teamSize: number;
}


const emp1: Employee = {
    id: 101,
    name: "John",
    department: "IT",
    salary: 50000
};

const emp2: Employee = {
    id: 102,
    name: "Alice",
    department: "HR",
    salary: 45000,
    email: "john@test.com"
};

const manager: Manager = {
    id: 1,
    name: "Sarah",
    teamSize: 12
};