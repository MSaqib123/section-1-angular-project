import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() hideTaskUI = new EventEmitter<void>();

  //==== Without Signals 2 way binding ========
  inputTitle = '';
  inputSummery = '';
  inputDate = '';

  //==== With Signals 2 way binding ========
  // inputTitle = signal('');
  // inputSummery = signal('');
  // inputDate = signal('');
  // sorry

  hideTask() {
    this.hideTaskUI.emit();
  }

  onSubmit() {
    // this. (
    //   {
    //     title: this.inputTitle,
    //     summery: this.inputSummery,
    //     date: this.inputDate,
    //   },
    //   this.userId
    // );
    this.hideTaskUI.emit();
  }
}
