import { Component } from '@angular/core';
import { AccordionComponent } from "../../components/accordion/accordion.component";
import { NzCarouselAutoplayComponent } from "../../components/carousel/carousel.component";

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [AccordionComponent, NzCarouselAutoplayComponent],
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent {}

