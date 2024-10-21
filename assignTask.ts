// Part 3
import { TeamMember } from "./TeamMember";
import { Task } from "./Task";

export function assignTask(member: TeamMember, task: Task): void {
    member.tasks.push(task);
}