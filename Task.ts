// Part 1
export class Task{
    title: string;
    description: string;
    completed: boolean;
    private static taskCount: number = 0;

    constructor(title: string, description: string){
        this.title = title;
        this.description = description;
        this.completed = false;
        Task.taskCount++;
    }

    markCompleted(): void {
        this.completed = true;
    }

    updateDescription(newDescription: string): void{
        this.description = newDescription;
    }

    static totalTasks(): number{
        return Task.taskCount;
    }
}
