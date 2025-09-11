import { Component, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) userName!: string;
  isAddingTask = false;

  get selectedUserTasks() {
    return [{}];
  }

  CompleteTask(completeTaskId: string) {}

  showAddTask() {
    this.isAddingTask = true;
  }

  hideTaskUI() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTask) {}
}
