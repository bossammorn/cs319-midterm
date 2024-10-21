import { Task } from "./Task";

export class PriorityTask extends Task{
    priority: 'low' | 'medium' | 'high';

    constructor(title: string, description: string, priority: 'low'){
        super(title, description);
        this.priority = priority;
    }

    override markCompleted(): void {
        super.markCompleted();
        console.log(`Priority task ${this.title} completed.`)
    }
}