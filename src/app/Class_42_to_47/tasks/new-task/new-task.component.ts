import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() hideTaskUI = new EventEmitter<void>();

  hideTask() {
    this.hideTaskUI.emit();
  }
}
