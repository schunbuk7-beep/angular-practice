import { Component,Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {

  @Input() text: string = 'Click';
  @Input() type: 'primary' | 'danger' | 'secondary' = 'primary';
  @Input() disabled: boolean = false;

  @Output() clicked = new EventEmitter<void>();

  onClicked(): void{
    if(!this.disabled)
    {
      this.clicked.emit();
    }
  }

}
