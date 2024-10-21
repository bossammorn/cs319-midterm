import { Task } from './Task';
import {PriorityTask} from './PriorityTask';

export function createTaksUpdater(updateFn: (task: Task) => void): (task: Task) => void {
    return (task: Task) => {
        updateFn(task);
    }
}

export function markAsUrgent(task: Task): void {
    if (task instanceof PriorityTask){
        task.priority = 'high';
    }
    else{
        console.log(`Task ${task.title} is not a PriorityTask and cannot be marked as urgent.`);
    }
}

const urgentTaskUpdater = createTaksUpdater(markAsUrgent);