import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-detail',
  standalone: true,
  imports: [],
  templateUrl: './new-detail.component.html',
  styleUrl: './new-detail.component.css'
})
export class NewDetailComponent {

  @Output() cancel = new EventEmitter<void>()

  onCancel(){
    this.cancel.emit();
  }

}
