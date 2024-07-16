import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Project {
  id: string;
  title: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  @Input({ required:true }) project !: Project;
  @Output() selectproject = new EventEmitter<string>();

  get projectsList() {
    return 'assets/projectlogos/' + this.project.icon;
  }

  onSelectProject() {
    this.selectproject.emit(this.project.id)
  }
}
