// Part 6
import { Task } from './Task';

export async function fetchTasks(): Promise<Task[]> {
    try {
        const data = await new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                const success = true;
                if (success) {
                    const jsonData = JSON.stringify([
                        { title: 'Task 1', description: 'Description 1' },
                        { title: 'Task 2', description: 'Description 2' },
                    ]);
                    resolve(jsonData);
                } else {
                    reject('Failed to fetch tasks.');
                }
            }, 1000);
        });

        const taskArray = JSON.parse(data);
        const tasks = taskArray.map((taskData: any) => new Task(taskData.title, taskData.description));
        return tasks;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        return [];
    }
}
