import { Component, Input } from '@angular/core';
import { DetailComponent } from "./detail/detail.component";
import { NewDetailComponent } from './new-detail/new-detail.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [DetailComponent, NewDetailComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  @Input ({ required: true }) projectId !: string;
  @Input ({ required: true }) name !: string;
  isAddingDetail = false;

  details = [
    {
      id:'d1',
      projectId:'p1',
      title:'Creating a form to add new functionality',
      summary:'A form needs to be filled to add and reflect the new functionality that has been done or needs to be done.',
      completed:false
    },
    {
      id:'d1_1',
      projectId:'p1',
      title:'Activating the COMPLETED button',
      summary:'Important to show which all features are active/done and the ones which still need to be looked at.',
      completed:false
    },
    {
      id:'d1_2',
      projectId:'p1',
      title:'Adding a login page',
      summary:'Will be using this as my portfolio. Therefore need to implement login functionality to maintain some kind of security.',
      completed:false
    },
    {
      id:'d1_3',
      projectId:'p1',
      title:'Adding a chatbot for interaction',
      summary:'Preferably using LangChain and its interaction UI made using Angular itself. Important for portfolio.',
      completed:false
    },
    {
      id:'d2',
      projectId:'p2',
      title:'Two',
      summary:'Summary for Title Two',
      completed:false
    },
    {
      id:'d3',
      projectId:'p3',
      title:'Three',
      summary:'Summary for Title Three',
      completed:false
    }
  ]

  get selectedProjectDetails() {
    return this.details.filter((detail) => detail.projectId === this.projectId);
  }

  onSelectNewDetails() {
    this.isAddingDetail = true;
  }

  onCancelAddDetail() {
    this.isAddingDetail = false;
  }

}
