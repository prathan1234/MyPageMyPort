import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  error: boolean = false;

  submit() {
    if (this.error) {
      this.error = false;
    } else {
      this.error = true;
    }
  }

}
