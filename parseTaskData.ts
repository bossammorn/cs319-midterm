// Part 8
import { Task } from "./Task";

export function parseTaskData(jsonData: string): Task[] | string{
    try {
        const data = JSON.parse(jsonData);
        return data.map((taskData: any) => new Task(taskData.title, taskData.description));
    }
    catch (error){
        return `Failed to parse task data: ${error instanceof Error ? error.message : error}`;
    }
}

const jsonData = '{"title":"Task 1","description":"Description 1"}';
const result = parseTaskData(jsonData);
console.log(result);