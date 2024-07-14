import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  @Input({ required:true }) id !: string;
  @Input({ required:true }) icon !: string;
  @Input({ required:true }) name !: string;
  @Output() selectproject = new EventEmitter();

  get projectsList() {
    return 'assets/projectlogos/' + this.icon;
  }

  onSelectProject() {
    this.selectproject.emit(this.id)
  }
}
