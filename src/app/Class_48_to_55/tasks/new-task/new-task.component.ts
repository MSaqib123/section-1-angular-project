import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() hideTaskUI = new EventEmitter<void>();

  //========= with newTask object ====
  @Output() add = new EventEmitter<NewTask>();

  //==== Form binding ========
  inputTitle = '';
  inputSummary = '';
  inputDate = '';

  hideTask() {
    this.hideTaskUI.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.inputTitle,
      summary: this.inputSummary,
      date: this.inputDate,
    });
    this.hideTaskUI.emit();
  }
}
