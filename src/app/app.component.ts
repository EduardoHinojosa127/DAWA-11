import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];

  constructor() {
    this.filteredTasks = this.tasks;
  }

  addTask(taskName: string) {
    const task: Task = { description: taskName, completed: false };
    this.tasks.push(task);
    this.applyFilter('all');
  }

  applyFilter(filter: string) {
    switch (filter) {
      case 'all':
        this.filteredTasks = this.tasks;
        break;
      case 'completed':
        this.filteredTasks = this.tasks.filter(task => task.completed);
        break;
      case 'incomplete':
        this.filteredTasks = this.tasks.filter(task => !task.completed);
        break;
      default:
        this.filteredTasks = this.tasks;
        break;
    }
  }
}

interface Task {
  description: string;
  completed: boolean;
}
