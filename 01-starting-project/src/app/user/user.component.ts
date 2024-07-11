import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  @Input() icon !: string;
  @Input() name !: string;

  get projectsList() {
    return 'assets/projectlogos/' + this.icon;
  }

  onSelectProject() {
    
  }
}
