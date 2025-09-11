import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master anguelr',
      summery: 'asdfklasd fasd kfajsd fkasd fkasdk f asdf jkasdk faksd f adsf',
      dueDate: '2026-12-31',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((x) => x.userId == this.userId);
  }
}
