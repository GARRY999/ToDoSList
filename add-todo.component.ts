import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventEmitter, Output } from '@angular/core';
import { ToDo } from '../../ToDo';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  title: string = '';
  desc: string = '';

  @Output() todoAdd:EventEmitter<ToDo>=new EventEmitter
  
  onSubmit(){
    const todo: ToDo = {
      srNo: 8,
      desc: this.desc,
      Title: this.title,
      active: true
    }
    this.todoAdd.emit(todo);
  }
}


