import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  @Input({ required:true }) project !: {
    id: string;
    name: string;
    icon: string;
  };
  @Output() selectproject = new EventEmitter<string>();

  get projectsList() {
    return 'assets/projectlogos/' + this.project.icon;
  }

  onSelectProject() {
    this.selectproject.emit(this.project.id)
  }
}
