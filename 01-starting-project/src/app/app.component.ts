import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DetailsComponent } from './details/details.component';
import { PROJECT_LISTS } from './project-lists';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, DetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  projects = PROJECT_LISTS;

  selectedProjectId ?: string;

  get selectedProject() {
    return this.projects.find((project) => project.id === this.selectedProjectId);
  }

  onSelectProject(id: string){
    this.selectedProjectId = id;
  }
}