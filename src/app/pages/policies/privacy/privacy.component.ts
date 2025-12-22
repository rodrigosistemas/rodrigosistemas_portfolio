import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy',
  imports: [CommonModule],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css'
})
export class PrivacyPolicyComponent {

  currentDate = new Date();

  emailContacto = 'rodrigosistemas22@outlook.com'

}
