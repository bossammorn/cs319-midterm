import { Task } from './Task';

const tasks: Task[] = [
    new Task('Task 1', 'Description 1'),
    new Task('Task 2', 'Description 2'),
    new Task('Task 3', 'Description 3'),
];

const taskTitles = tasks.map(task => task.title);

const incompleteTasks = tasks.filter(task => !task.completed);

const completedTaskCount = tasks.reduce((count, task) => (task.completed ? count + 1 : count), 0);

// Output the results
console.log('Task Titles:', taskTitles);
console.log('Incomplete Tasks:', incompleteTasks);
console.log('Completed Task Count:', completedTaskCount);
