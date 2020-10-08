import { IStudent } from './student.interface';
import { IExpense } from './expense.interface';

export interface ITrip {
    title: string;
    total: number;
    average: number;
    students: IStudent[];
    expenses: IExpense[];
}