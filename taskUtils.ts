// Part 9
import { Task } from './Task';

export function calculateTotalCompletedTasks(tasks: Task[]): number {
    return tasks.reduce((count, task) => (task.completed ? count + 1 : count), 0);
}
