import { Component } from '@angular/core';

import { PROJECT_LISTS } from '../project-lists';

const randomselect = Math.floor(Math.random() * PROJECT_LISTS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedProject = PROJECT_LISTS[randomselect];

  get getProjectsList(){
    return 'assets/projectlogos/' + this.selectedProject.icon
  }

  onSelectProject() {
    console.log("Clicked!")
  }
}
