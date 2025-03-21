import { Component } from '@angular/core';
import { ToDo } from '../../ToDo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";
@Component({
  selector: 'app-todos',
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  localItem : string | null;
  todos: ToDo[] = [];

  constructor(){
  this.localItem=localStorage.getItem("todos");
  if(this.localItem==null){
  this.todos=[]
  }
  else{
    this.todos=JSON.parse(this.localItem);
  }
}
Deletetodo(todo:ToDo){
console.log(todo)
const index= this.todos.indexOf(todo)
this.todos.splice(index,1)
localStorage.setItem("todos",JSON.stringify(this.todos));
}
addToDo(todo:ToDo){
  console.log(todo);
  this.todos.push(todo)
  localStorage.setItem("todos",JSON.stringify(this.todos));
}
toggleToDo(todo:ToDo){
  const index= this.todos.indexOf(todo)
  this.todos[index].active=!this.todos[index].active; 
  localStorage.setItem("todos",JSON.stringify(this.todos));
}
}