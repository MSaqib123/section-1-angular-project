import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from '../task.model';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { TasksService } from '../task.servise';

@Component({
  selector: 'app-task',
  imports: [CardComponent, CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  //===================================
  // =====  Injection
  //===================================
  private tasksService = inject(TasksService);

  onCompleteTask() {
    //this.selectedTaskId.emit(this.task.id);
    this.tasksService.deleteTask(this.task.id);
  }
}
