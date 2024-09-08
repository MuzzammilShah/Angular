import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-detail',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-detail.component.html',
  styleUrl: './new-detail.component.css'
})
export class NewDetailComponent {

  @Output() cancel = new EventEmitter<void>()
  @Output() add = new EventEmitter<{title:string; summary:string;}>()
  enterTitle = '';
  enterSummary = '';

  onCancel(){
    this.cancel.emit();
  }

  onSubmit(){
    this.add.emit({
      title: this.enterTitle,
      summary: this.enterSummary,
    })
  }

}
