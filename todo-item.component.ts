import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDo } from '../../ToDo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
@Input() todo!: ToDo;
@Input() i!: number;
@Output() todoDelete:EventEmitter<ToDo>=new EventEmitter
@Output() todoCheckbox:EventEmitter<ToDo>=new EventEmitter

  OnClick(todo:ToDo){
    this.todoDelete.emit(todo)
    console.log("OnClick has been triggrred")
  }
  onCheckBoxClick(todo: ToDo) {
    this.todoCheckbox.emit(todo)
  }
}
