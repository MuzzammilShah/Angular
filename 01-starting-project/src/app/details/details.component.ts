import { Component, Input } from '@angular/core';
import { DetailComponent } from "./detail/detail.component";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [DetailComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  @Input ({ required: true }) name ?: string;

}
