import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students: any[] = [
        { id: 1, name: 'John Doe', age: 20, email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', age: 22, email: 'jane.smith@example.com' },
        { id: 3, name: 'Alice Johnson', age: 21, email: 'alice.johnson@example.com' },
        { id: 4, name: 'Bob Brown', age: 23, email: 'bob.brown@example.com' },
        { id: 5, name: 'Charlie Davis', age: 24, email: 'charlie.davis@example.com' },
        { id: 6, name: 'David Evans', age: 25, email: 'david.evans@example.com' },
        { id: 7, name: 'Eva Green', age: 26, email: 'eva.green@example.com' },
        { id: 8, name: 'Frank Harris', age: 27, email: 'frank.harris@example.com' }
    ];

    getAllStudents() {
        return this.students;
    }
    getStudentById(id: number) {
        const student = this.students.find(s => s.id === id)
        if (!student) {
            throw new NotFoundException(`Student with ID ${id} not found`);
        }
        return student;
    }
// post
    createStudent(data: { name: string; age: number; email: string }) {
        const newStudent = { id: Date.now(), ...data };
        this.students.push(newStudent);
        return newStudent;
    }
    // put
    updateStudent(id: number, data: { name?: string; age?: number; email?: string }) {
        const studentIndex = this.students.findIndex(s => s.id === id);
        if (studentIndex === -1) {
            throw new NotFoundException(`Student with ID ${id} not found`);
        }
        this.students[studentIndex] = {id, ...data};
        return this.students[studentIndex];
    }
    
    // Patch
    patchStudent(id: number, data: Partial<{ name: string; age: number; email: string }>) {
        const student = this.getStudentById(id);
        Object.assign(student, data);
        return student;
    }

    // delete
    deleteStudent(id: number) {
        const studentIndex = this.students.findIndex(s => s.id === id);
        if (studentIndex === -1) {
            throw new NotFoundException(`Student with ID ${id} not found`);
        }
        const deleted = this.students.splice(studentIndex, 1)[0];
        return {message: `Student with ID ${id} deleted`, student: deleted[0]};
    }
}
