import { Component } from '@angular/core';
import { SkeletonComponent } from "./components/skeleton/skeleton.component";

@Component({
  selector: 'app-root',
  imports: [SkeletonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'rodrigosistemas.com';

}
