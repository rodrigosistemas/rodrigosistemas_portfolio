import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/all';
import { AboutmeComponent } from "../aboutme/aboutme.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [AboutmeComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('titular') titular!: ElementRef;

  ngAfterViewInit(): void {
    gsap.registerPlugin(TextPlugin);

    const tl = gsap.timeline();

    const words = ["Jr Cibersecurity Engineer", "DevSecOps Specialist"];

    words.forEach((word) => {
      tl.to(this.titular.nativeElement, {
        text: word,
        duration: 5,
        delay: 1
      })
    });

    tl.repeat(-1).repeatDelay(1);

  }

}
