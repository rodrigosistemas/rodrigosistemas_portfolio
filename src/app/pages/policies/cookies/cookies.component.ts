import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cookies',
  imports: [CommonModule],
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.css'
})
export class CookiesPolicyComponent {
  
  currentDate = new Date();

  emailContacto = 'rodrigosistemas22@outlook.com'

}
