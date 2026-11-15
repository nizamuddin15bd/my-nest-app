import { Body, Controller, Get, Param, Patch, Post, Put,Delete } from '@nestjs/common';
import { StudentService } from './student.service.js';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService){}

    @Get()
    getAll() {
        return this.studentService.getAllStudents();
    }

    @Get(':id')
    getById(id: number) {
        return this.studentService.getStudentById(id);
    }
    @Get(':id')
    getOne(@Param('id') id: String) {
        return this.studentService.getStudentById(Number(id));
    }

    @Post()
    create(@Body() body: { name: string; age: number; email: string }) {
        return this.studentService.createStudent(body);
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() body: { name?: string; age?: number; email?: string }) {
        return this.studentService.updateStudent(Number(id), body);
    }
    @Patch(':id')
    patch(@Param('id') id: string, data: Partial<{ name: string; age: number; email: string }>) {
        return this.studentService.patchStudent(Number(id), data);
    }
    @Delete(':id')
    delete(@Param(":id") id: string) {
        return this.studentService.deleteStudent(Number(id));
    }   
}
