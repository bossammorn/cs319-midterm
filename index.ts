import { Task } from './Task';
import { calculateTotalCompletedTasks } from './taskUtils';

const tasks: Task[] = [
    new Task('Task 1', 'Description 1'),
    new Task('Task 2', 'Description 2'),
    new Task('Task 3', 'Description 3'),
];

tasks[0].markCompleted();
tasks[2].markCompleted();

const totalCompleted = calculateTotalCompletedTasks(tasks);
console.log(`Total completed tasks: ${totalCompleted}`);
